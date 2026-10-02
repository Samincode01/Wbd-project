import { useState, useEffect } from 'react';
import { Lock, Mail, User, Clock, Building2, LogOut, Search, Trash2, RefreshCw } from 'lucide-react';
import { useRouter } from '@/router/Router';

interface Message {
  id: number;
  name: string;
  email: string;
  organization: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const { navigate } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMessages = async (pass: string) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/get_messages.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ password: pass }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setMessages(result.data);
        setIsAuthenticated(true);
        // Save to session storage with a 30-minute expiration
        const expiresAt = Date.now() + 30 * 60 * 1000;
        sessionStorage.setItem('admin_auth', JSON.stringify({ password: pass, expiresAt }));
      } else {
        setError(result.message || 'Incorrect password');
        sessionStorage.removeItem('admin_auth');
        setIsAuthenticated(false);
      }
    } catch (err) {
      setError('Network error connecting to the database.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const authStr = sessionStorage.getItem('admin_auth');
    if (authStr) {
      const auth = JSON.parse(authStr);
      if (auth.expiresAt > Date.now()) {
        setPassword(auth.password);
        fetchMessages(auth.password);
      } else {
        sessionStorage.removeItem('admin_auth');
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMessages(password);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setMessages([]);
    sessionStorage.removeItem('admin_auth');
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch('/api/delete_message.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ password, id }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setMessages(messages.filter(msg => msg.id !== id));
      } else {
        alert(result.message || 'Failed to delete message');
      }
    } catch (err) {
      alert('Network error while deleting message.');
    }
  };

  const filteredMessages = messages.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-6">
        <div className="w-full max-w-md card-base bg-white p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
          
          <button onClick={() => navigate('home')} className="absolute top-6 right-6 text-ink-400 hover:text-brand-primary text-sm font-medium">
            Back to Site
          </button>

          <div className="mb-8">
            <h1 className="font-heading font-bold text-2xl text-brand-black mb-2">Admin Dashboard</h1>
            <p className="text-ink-500 text-sm">Enter your password to view the Inbox.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="font-display font-medium text-xs uppercase tracking-wide text-ink-500 mb-2 block">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-base pl-11"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && <p className="text-brand-primary text-sm font-medium">{error}</p>}

            <button type="submit" disabled={isLoading} className="btn-primary w-full justify-center">
              {isLoading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-50 pb-20">
      {/* Admin Header */}
      <header className="bg-white border-b border-ink-200 sticky top-0 z-30 shadow-sm">
        <div className="container-max px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center text-white font-heading font-bold">
              WB
            </div>
            <h1 className="font-heading font-bold text-xl text-brand-black hidden sm:block">Admin Workspace</h1>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('home')} className="text-ink-500 hover:text-brand-primary text-sm font-medium transition-colors">
              View Site
            </button>
            <div className="w-px h-4 bg-ink-200" />
            <button onClick={handleLogout} className="flex items-center gap-2 text-ink-500 hover:text-brand-primary text-sm font-medium transition-colors">
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container-max px-6 mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading font-bold text-3xl text-brand-black mb-1">Inbox</h2>
            <p className="text-ink-500 text-sm">You have {messages.length} total messages from the contact form.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button 
              onClick={() => fetchMessages(password)}
              disabled={isLoading}
              className="p-2 text-ink-500 hover:text-brand-primary bg-white border border-ink-200 rounded-lg hover:border-brand-primary/30 transition-all flex-shrink-0"
              title="Refresh messages"
            >
              <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
            </button>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-base py-2 pl-10 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {filteredMessages.length === 0 ? (
            <div className="card-base p-12 text-center flex flex-col items-center justify-center">
              <Mail size={48} className="text-ink-300 mb-4" />
              <h3 className="font-heading font-bold text-xl text-brand-black mb-2">No messages found</h3>
              <p className="text-ink-500">Wait for someone to reach out through the contact form!</p>
            </div>
          ) : (
            filteredMessages.map((msg) => (
              <div key={msg.id} className="card-base bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6">
                
                {/* Sender Info Sidebar */}
                <div className="w-full md:w-64 flex-shrink-0 space-y-4 md:border-r border-ink-100 pr-6">
                  <div className="flex items-start gap-3">
                    <User size={18} className="text-brand-primary mt-0.5" />
                    <div>
                      <p className="font-display font-bold text-sm text-brand-black">{msg.name}</p>
                      <a href={`mailto:${msg.email}`} className="text-ink-500 text-xs hover:text-brand-primary truncate block w-48">{msg.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building2 size={18} className="text-brand-primary mt-0.5" />
                    <p className="font-display font-medium text-sm text-brand-black">{msg.organization || 'No organization'}</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-brand-primary mt-0.5" />
                    <p className="font-display text-xs text-ink-500">
                      {new Date(msg.created_at.replace(' ', 'T') + 'Z').toLocaleString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                {/* Message Body & Actions */}
                <div className="flex-grow flex flex-col relative">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-display font-medium text-xs uppercase tracking-wide text-ink-400">Message Content</p>
                    <button 
                      onClick={() => handleDelete(msg.id)}
                      className="text-ink-400 hover:text-brand-primary transition-colors flex items-center gap-1 text-xs font-display font-medium"
                      title="Delete message"
                    >
                      <Trash2 size={16} />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                  <div className="bg-ink-50 p-5 rounded-xl border border-ink-100 flex-grow">
                    <p className="font-body text-ink-700 text-sm whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
