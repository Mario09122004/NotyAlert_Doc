# Privacy Policy - NotyAlert

**Last updated**: November 6, 2026  
**Application**: NotyAlert (Android)  
**Data Controller**: Mario Lira (<mario.alberto.lira.zamora@gmail.com>)

---

At **NotyAlert**, protecting your privacy is our core foundational priority. The application was built and designed strictly under the principle of **Privacy by Design and by Default**, operating on a 100% offline-first architecture in full compliance with the Mexican Federal Law on Protection of Personal Data Held by Private Parties (**LFPDPPP**), the European Union General Data Protection Regulation (**GDPR/RGPD**), and the **Data Safety** requirements of Google Play Store.

### 1. Zero Data Collection & Zero-Network Architecture
- **No External Servers & No Internet Permission**: NotyAlert does **not** collect, store, transmit, or process any personal data, device identifiers, or user content on remote servers. As an immutable, verifiable technical guarantee, the application **completely lacks the `android.permission.INTERNET` permission in its source code and manifest**. It is technically impossible for NotyAlert to transmit any data over the internet.
- **No Accounts or User Registration**: You do not need to create an account, log in, or provide your name, email address, telephone number, or social media profiles.
- **Confidential Reminder Content**: Your task titles, descriptions, alert times, recurrence rules, and preferences remain solely on your local device.

### 2. Local Storage, Backup & Delimitation of Sharing Features
- **Local Sandbox Storage**: All data is stored in a private local SQLite database managed via Android Jetpack Room within the application's private sandbox. System-level cloud backup is disabled (`android:allowBackup="false"`).
- **Local Export (JSON & QR Codes)**: Reminder backup and transfer features via `.json` files or QR codes are generated and processed 100% locally on your device under your explicit action.
- **Use of Android Native Sharing (`FileProvider`)**: If you voluntarily share a QR code image or export a backup file via the Android system Share Sheet to third-party applications (such as email clients, instant messaging apps, or cloud storage), processing and transmission of those files will be governed solely by the privacy policies of the selected third-party services, completely outside the control and liability of NotyAlert.

### 3. Declared Android System Permissions & Technical Justification
NotyAlert requests only the minimum system permissions necessary for local operation:

| Android Permission | Technical Justification |
| :--- | :--- |
| `android.permission.POST_NOTIFICATIONS` | Displays visual and audible reminder alerts in the status bar and lock screen (required on Android 13+). |
| `android.permission.SCHEDULE_EXACT_ALARM` | Allows scheduling high-precision alarms via `AlarmManager` so the Android operating system delivers the reminder alert at the exact scheduled second. |
| `android.permission.RECEIVE_BOOT_COMPLETED` | Allows the system receiver (`BootReceiver`) to automatically restore and reschedule active future reminders when your device is powered on or rebooted. |
| `android.permission.WAKE_LOCK` | Briefly wakes the CPU for fractions of a second at the scheduled time to deliver the notification before the device returns to deep sleep. |
| `android.permission.VIBRATE` | Provides subtle haptic feedback when interacting with buttons, calendar controls, and tactile alerts. |
| `android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Allows requesting battery optimization exemptions from aggressive OEM background task killers (such as MIUI/HyperOS, One UI, EMUI). |
| `android.permission.CAMERA` *(Optional)* | Used exclusively to scan NotyAlert QR codes to import reminders. **Image processing occurs in real time and is volatile in RAM using ZXing; no photos or videos are ever saved, recorded, or transmitted**. |

### 4. Zero Trackers, Analytics & Third-Party Advertising
- NotyAlert **does not include** analytics SDKs (no Google Analytics, Firebase, or Mixpanel).
- NotyAlert **does not include** advertising networks (no Google AdMob, Unity Ads, etc.).
- NotyAlert **does not include** behavioral trackers, telemetry libraries, or social media SDKs.

### 5. Data Retention, Irreversible Erasure & ARCO / GDPR Rights
In accordance with ARCO rights under Mexican law (LFPDPPP) and erasure/portability rights under GDPR:
- **Access & Correction**: You have full real-time access to edit or delete any individual reminder directly in the app.
- **Permanent Deletion**: You can permanently and irreversibly erase all data stored by NotyAlert by clearing storage (`Device Settings > Apps > NotyAlert > Storage > Clear Data`) or by **uninstalling the app**. Because no data is ever transmitted to external servers, local deletion is immediate, complete, and unrecoverable.

### 6. Children's Privacy (COPPA & GDPR-K)
Because NotyAlert collects zero personal information, it provides a safe digital environment for minors, fully complying with COPPA, GDPR Article 8, and Mexican child privacy standards.

### 7. Official Privacy Contact Information
For any questions, requests, or inquiries regarding this Privacy Policy or the exercise of your data protection rights, please contact the developer:  
- **Data Controller**: Mario Lira  
- **Contact Email**: `mario.alberto.lira.zamora@gmail.com`  
- **Country**: United Mexican States

### 8. Amendments & Governing Law
This Privacy Policy is governed by the laws of the **United Mexican States** and applicable international data protection standards. Any updates reflecting future Android operating system changes will be communicated via the Google Play Store listing and within the app's legal section.
