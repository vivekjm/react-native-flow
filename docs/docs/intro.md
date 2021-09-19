---
sidebar_position: 1
---

# React Native

The term hybrid mobile app development has been here for a long but what makes react native different from other frame works like cordova and ionic. The uniqueness of React Native is a single JavaScript codebase used for both platforms. React Native compiles the JavaScript code to native components, thus, using platform-specific APIs and modules. By using such native components as Images, Text, and View as building blocks, developers can build there own custom components also.

<div align="center">
  <img src="https://reactnative.dev/docs/assets/diagram_ios-android-views.svg" width="65%" />
</div>

Ever wondered how react native converts the javascript code into strongly typed Java and objective C for the corresponding platforms ? Okay lets dive deep into that

### Threads 🤖

There are 4 different threads in the React Native App :

**1. UI Thread** : Also known as Main Thread. This is used for native android or iOS UI rendering. For example, In android this thread is used for android measure/layout/draw happens.

**2. JS Thread**: JS thread or Javascript thread is the thread where the logic will run. For e.g., this is the thread where the application’s javascript code is executed, api calls are made, touch events are processed and many other. Updates to native views are batched and sent over to native side at the end of each event loop in the JS thread (and are executed eventually in UI thread).

To maintain good performance, JS thread should be able to send batched updates to UI thread before next frame rendering deadline. For example, iOS display 60 frames per sec and this lead to new frame every 16.67ms. If you do some complex processing in your javascript event loop that leads to UI changes and it takes more than 16.67ms, then UI will appear sluggish.

<div align="center">
  <img src="https://calendar.perfplanet.com/wp-content/uploads/2018/12/image-1024x575.png" width="65%" />
</div>

One exception are the native views that happen completely in UI thread, for example, navigatorIOS or scrollview run completely in UI thread and hence are not blocked due to a slow js thread.

**3. Native Modules Thread**: Sometimes an app needs access to platform API, and this happens as part of native module thread.

**4. Render Thread** : Only in Android L (5.0), react native render thread is used to generate actual OpenGL commands used to draw your UI.

### Working ⚙️

Process involved in working of React Native

**1.** At the first start of the app, the main thread starts execution and starts loading JS bundles.

**2.** When JavaScript code has been loaded successfully, the main thread sends it to another JS thread because when JS does some heavy calculations stuff the thread for a while, the UI thread will not suffer at all any time.

**3.** When React start rendering Reconciler starts “diffing”, and when it generates a new virtual DOM(layout) it sends changes to another thread(Shadow thread).

**4.** Shadow thread calculates layout and then sends layout parameters/objects to the main(UI) thread. ( Here you may wonder why we call it “shadow”? It’s because it generates shadow nodes )

**5.** Since only the main thread is able to render something on the screen, shadow thread should send generated layout to the main thread, and only then UI renders.
