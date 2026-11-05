# Privacy Policy - NotyAlert

**Last updated**: November 5, 2026  
**Application**: NotyAlert (Android)

---

At **NotyAlert**, we respect and protect your privacy. NotyAlert was designed and built under the core principle of **Privacy by Design**, 100% offline-first functionality, and in strict compliance with the **Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP)** and applicable regulations of the **United Mexican States**.

### 1. Zero Data Collection
- **No external servers**: NotyAlert does **not** collect, upload, share, or sell any personal data, identifiers, or telemetry.
- **No accounts or sign-up**: You can use all features without creating an account or providing an email address.
- **Your reminders remain yours**: Titles, notes, reminder times, and settings never leave your physical device.

### 2. Local Storage & User Ownership
- All data is stored in the local SQLite/Room database within your device's private sandbox.
- Backup, JSON export/import, and encrypted QR code transfers occur 100% locally on your phone without external cloud intervention.

### 3. Declared Permissions & Notification-Based Operation
NotyAlert works by delivering **local notifications to your phone** to remind you of what you have scheduled (it is not an emergency alarm clock). It requests only the permissions strictly necessary:

| Permission | Technical Justification |
| :--- | :--- |
| `POST_NOTIFICATIONS` | Displays scheduled reminder notifications on your phone. |
| `SCHEDULE_EXACT_ALARM` & `USE_EXACT_ALARM` | Required by Android's `AlarmManager` so the operating system delivers the reminder notification at the scheduled time. |
| `RECEIVE_BOOT_COMPLETED` | Reschedules active reminders automatically upon device reboot. |
| `CAMERA` *(Optional)* | Scans QR codes to import reminders. Images are never recorded or stored. |
| `VIBRATE` | Provides subtle haptic feedback for user interactions. |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Prevents aggressive vendor task killers from blocking notification delivery. |
| `WAKE_LOCK` | Temporarily wakes the CPU at the scheduled moment to deliver the notification. |

### 4. Zero Third-Party Trackers or Ads
- No analytics SDKs, no behavioral trackers, and no advertisements.

### 5. Data Retention, Deletion & ARCO Rights
- In compliance with Mexican ARCO rights (LFPDPPP) and international standards, you hold complete physical control over your data.
- Deleting a reminder inside the app removes it permanently. Uninstalling NotyAlert or clearing app data via Android Settings completely erases all data immediately.

### 6. Children's Privacy & Governing Law
- NotyAlert does not collect personal information from children or adults, adhering to Mexican regulations, COPPA, and GDPR-K principles.
- This Privacy Policy is governed by and construed under the laws in force in the **United Mexican States**.

### 7. Support & Contact
For support or inquiries, please use the developer contact options provided on the official Google Play Store listing.
