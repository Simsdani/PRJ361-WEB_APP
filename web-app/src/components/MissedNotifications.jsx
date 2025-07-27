import { Bell, Clock } from "lucide-react";

export const MissedNotifications = ({ notifications }) => {
  const getNotificationIcon = (type) => {
    switch (type) {
      case "motion":
        return <Bell className="w-4 h-4 text-app-gold" />;
      case "emergency":
        return <Bell className="w-4 h-4 text-app-emergency" />;
      default:
        return <Bell className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getNotificationStyle = (type) => {
    switch (type) {
      case "emergency":
        return "border-l-app-emergency bg-app-emergency/5";
      case "motion":
        return "border-l-app-gold bg-app-gold/5";
      default:
        return "border-l-muted bg-card";
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-muted-foreground tracking-wider">
        MISSED NOTIFICATIONS
      </h2>

      <div className="space-y-3">
        {notifications.length === 0 ? (
          <div className="bg-card rounded-lg p-4 text-center border border-border">
            <Bell className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">No missed notifications</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`
                bg-card rounded-lg p-4 border-l-4 border border-border shadow-sm
                ${getNotificationStyle(notification.type)}
              `}
            >
              <div className="flex items-start gap-3">
                {getNotificationIcon(notification.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-card-foreground">
                    {notification.message}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
