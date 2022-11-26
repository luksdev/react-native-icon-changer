package com.soscli;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.content.pm.PackageManager;
import android.content.ComponentName;
import com.facebook.react.bridge.Promise;
import android.os.Bundle;  
import android.widget.Toast; 

public class IconChanger extends ReactContextBaseJavaModule {
  private final ReactApplicationContext reactContext;

  public IconChanger(ReactApplicationContext reactContext) {
      super(reactContext);
      this.reactContext = reactContext;
  }

  @Override
  public String getName() {
      return "IconChanger";
  }

  @ReactMethod
  public void changeIcon(String enableIntent, String disableIntent, Promise response) {
      try {
          PackageManager packageManager = this.reactContext.getPackageManager();
          int action;
          String activeIntent="com.soscli."+enableIntent;

          Toast.makeText( this.reactContext,"Enabling "+enableIntent,Toast.LENGTH_SHORT).show();

          packageManager.setComponentEnabledSetting(
              new ComponentName("com.soscli", activeIntent),
              PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
              PackageManager.DONT_KILL_APP
          );

          if(!disableIntent.equals(null) && !disableIntent.equals(enableIntent)){
              activeIntent="com.soscli."+disableIntent;
              Toast.makeText( this.reactContext,"Disabling "+disableIntent,Toast.LENGTH_SHORT).show();

              packageManager.setComponentEnabledSetting(
                  new ComponentName("com.soscli", activeIntent),
                  PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
                  PackageManager.DONT_KILL_APP
              );
          }
          response.resolve(enableIntent);
      } catch (Exception e) {
          response.reject("Error", e);
      }
  }
}