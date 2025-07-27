import { Bell, Home, Settings, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={`
        fixed left-0 top-0 h-full w-80 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:w-64
      `}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-app-navy" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-card-foreground">OWNER'S NAME</h3>
              <p className="text-sm text-muted-foreground">Smart Home User</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 h-12 text-card-foreground hover:bg-app-navy-lighter"
            >
              <Bell className="w-5 h-5" />
              Notifications
            </Button>
          </nav>

          <div className="border-t border-border pt-6 mt-6">
            <div className="text-center mb-6">
              <h4 className="text-sm font-medium text-muted-foreground">SMART DOOR MOTION SENSOR</h4>
              <p className="text-xs text-muted-foreground mt-1">Emergency Alert System</p>
            </div>

            <div className="flex justify-around mb-4">
              <Button variant="ghost" size="sm" className="text-app-gold">
                <Home className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Settings className="w-5 h-5" />
              </Button>
            </div>

            <Button 
              variant="outline" 
              className="w-full gap-2 border-border hover:bg-app-navy-lighter"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
