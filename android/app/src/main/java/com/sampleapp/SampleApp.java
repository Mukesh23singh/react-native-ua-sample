package com.sampleapp;

import android.app.Application;

import com.globo.reactnativeua.ReactNativeUA;

public class SampleApp extends Application {
    // private ReactNativeUA mReactNativeUA;
    private static final String FIRST_RUN_KEY = "first_run";

    @Override
    public void onCreate() {
        super.onCreate();
        ReactNativeUA.takeOff(this);
    }
}
