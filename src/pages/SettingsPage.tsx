import React from 'react';
import { User, Shield, Bell, Globe, Moon, Download, LogOut, ChevronRight, Key, CreditCard, Lock, HelpCircle } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          id: 1,
          title: 'Profile',
          description: 'Personal information and preferences',
          icon: User,
          color: 'bg-blue-500',
          hasChevron: true,
        },
        {
          id: 2,
          title: 'Security',
          description: 'Password, 2FA, and recovery',
          icon: Shield,
          color: 'bg-emerald-500',
          hasChevron: true,
        },
        {
          id: 3,
          title: 'Notifications',
          description: 'Email and push notifications',
          icon: Bell,
          color: 'bg-purple-500',
          hasChevron: true,
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          id: 4,
          title: 'Appearance',
          description: 'Dark mode and theme settings',
          icon: Moon,
          color: 'bg-zinc-600',
          hasChevron: true,
          badge: 'Dark',
        },
        {
          id: 5,
          title: 'Language',
          description: 'App language and region',
          icon: Globe,
          color: 'bg-orange-500',
          hasChevron: true,
          badge: 'English',
        },
        {
          id: 6,
          title: 'Currency',
          description: 'Default currency display',
          icon: CreditCard,
          color: 'bg-green-500',
          hasChevron: true,
          badge: 'USD',
        },
      ],
    },
    {
      title: 'Data',
      items: [
        {
          id: 7,
          title: 'Export Data',
          description: 'Download your transaction history',
          icon: Download,
          color: 'bg-indigo-500',
          hasChevron: false,
        },
        {
          id: 8,
          title: 'Privacy',
          description: 'Data sharing and privacy controls',
          icon: Lock,
          color: 'bg-rose-500',
          hasChevron: true,
        },
      ],
    },
  ];

  const quickActions = [
    {
      id: 1,
      title: 'Support',
      icon: HelpCircle,
      color: 'bg-blue-500/10',
      textColor: 'text-blue-400',
    },
    {
      id: 2,
      title: 'API Keys',
      icon: Key,
      color: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
    },
    {
      id: 3,
      title: 'Logout',
      icon: LogOut,
      color: 'bg-rose-500/10',
      textColor: 'text-rose-400',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-zinc-500 text-sm">Manage your account and preferences</p>
      </div>

      {/* Profile Card */}
      <div className="bg-black border border-zinc-800 rounded-2xl p-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-xl font-bold">JD</span>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-zinc-100">John Doe</h2>
            <p className="text-sm text-zinc-500">john.doe@example.com</p>
            <p className="text-xs text-zinc-600 mt-1">Member since Jan 2024</p>
          </div>
          <button className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium rounded-xl transition-colors active:scale-[0.98]">
            Edit
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
              {section.title}
            </h3>
            
            <div className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group bg-black border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-colors cursor-pointer active:scale-[0.98]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-zinc-100">{item.title}</h4>
                            {item.badge && (
                              <span className="text-xs px-2 py-0.5 bg-zinc-900 text-zinc-400 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-zinc-500 mt-1">{item.description}</p>
                        </div>
                      </div>
                      
                      {item.hasChevron ? (
                        <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                      ) : (
                        <div className="w-5 h-5" /> // Spacer for alignment
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
          Quick Actions
        </h3>
        
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className="group bg-black border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-all active:scale-[0.98]"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${action.textColor}`} />
                  </div>
                  <span className="text-sm font-medium text-zinc-200">{action.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* App Info */}
      <div className="bg-black border border-zinc-800 rounded-2xl p-5">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-zinc-500">App Version</p>
              <p className="font-medium text-zinc-100">v1.0.0</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-500">Last Updated</p>
              <p className="font-medium text-zinc-100">Dec 15, 2024</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-zinc-900">
            <p className="text-xs text-zinc-600 text-center">
              © 2024 Impala Finance. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">
                Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-5">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <h3 className="font-semibold text-rose-400">Danger Zone</h3>
              <p className="text-sm text-rose-500/80">Irreversible actions</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <button className="w-full py-3 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-medium rounded-xl transition-colors active:scale-[0.98]">
              Delete Account Data
            </button>
            <button className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-xl transition-colors active:scale-[0.98]">
              Close Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;