import { Activity, Clock } from "lucide-react";

export const MotionAlert = ({ lastDetected, isActive }) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isActive ? 'bg-app-success/20 text-app-success' : 'bg-muted text-muted-foreground'
        }`}>
          <Activity className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-card-foreground mb-1">
            PIR SENSOR MOTION DETECTED
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Motion Detected {lastDetected}</span>
          </div>
        </div>

        {isActive && (
          <div className="w-3 h-3 bg-app-success rounded-full animate-pulse" />
        )}
      </div>
    </div>
  );
};
