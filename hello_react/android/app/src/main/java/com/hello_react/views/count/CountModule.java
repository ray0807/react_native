package com.hello_react.views.count;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by wanglei on 2016/8/1.
 */

public class CountModule extends ReactContextBaseJavaModule {
    private static String TEST_COUNT_KEY = "TEST_COUNT_KEY";

    public CountModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CountModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(TEST_COUNT_KEY, 1);
        return constants;
    }

    @ReactMethod
    public void count(String msg, int duration) {
        Toast.makeText(getReactApplicationContext(), msg, duration).show();

    }
}
