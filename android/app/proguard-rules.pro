# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:
-dontwarn com.igexin.**
-keep class com.igexin.**{*;}
-keep class org.json.** { *; }

-keep class cn.jiguang.** { *; }
-keep class android.support.** { *; }
-keep class androidx.** { *; }
-keep class com.google.android.** { *; }

-keep class android.support.v4.app.NotificationCompat { *; }
-keep class android.support.v4.app.NotificationCompat$Builder { *; }
