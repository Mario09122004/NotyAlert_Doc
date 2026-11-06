# Política de Privacidad / Privacy Policy - NotyAlert

**Última actualización / Last updated**: 6 de Noviembre de 2026 / November 6, 2026  
**Aplicación / Application**: NotyAlert (Android)  
**Desarrollador y Responsable / Data Controller**: Mario Lira (<mario.alberto.lira.zamora@gmail.com>)

---

## 🇲🇽 Versión en Español

En **NotyAlert**, la protección de tu intimidad y privacidad es una prioridad absoluta. La aplicación ha sido concebida, diseñada e implementada bajo el estándar de **Privacidad por Diseño y por Defecto (*Privacy by Design and by Default*)**, operando con una arquitectura 100% local (*offline-first*) y en estricto cumplimiento con la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)** de los **Estados Unidos Mexicanos**, el **Reglamento General de Protección de Datos (RGPD/GDPR)** de la Unión Europea y las directrices de Seguridad de los Datos (*Data Safety*) de Google Play Store.

### 1. Cero Recopilación de Datos y Arquitectura de Red Cero (*Zero-Network*)
- **Inexistencia de Servidores Externos y Ausencia de Permiso de Red**: NotyAlert **no** recopila, almacena, transmite ni procesa ningún dato personal, identificador de dispositivo ni contenido de usuario en servidores remotos. Como salvaguarda técnica verificable, la aplicación **carece por completo del permiso de red `android.permission.INTERNET` en su código fuente y manifiesto**, por lo que es técnicamente imposible que la app envíe información fuera de tu dispositivo.
- **Sin Cuentas ni Registro**: No se requiere crear cuenta, iniciar sesión ni proporcionar nombres, correos electrónicos, números telefónicos o perfiles de redes sociales.
- **Contenido Confidencial de los Recordatorios**: Los títulos, notas descriptivas, frecuencias, horarios y colores de tus recordatorios permanecen confinados en el almacenamiento protegido de tu propio teléfono.

### 2. Almacenamiento Local, Respaldo y Delimitación en Funciones para Compartir
- **Almacenamiento Seguro en Dispositivo**: Toda la información se almacena localmente en una base de datos privada SQLite gestionada a través de la biblioteca Jetpack Room en el sandbox interno asignado por Android a NotyAlert. La aplicación tiene deshabilitado el respaldo automático en la nube a nivel de sistema operativo (`android:allowBackup="false"`).
- **Exportación Local (JSON y Códigos QR)**: Las funciones de respaldo o transferencia de recordatorios mediante archivos `.json` o códigos QR se generan de forma 100% local en tu dispositivo.
- **Uso de Funciones Nativas para Compartir (`FileProvider`)**: Si decides voluntariamente compartir un código QR o exportar un archivo de respaldo mediante el selector de Android hacia aplicaciones de terceros (por ejemplo, clientes de correo electrónico, mensajería instantánea o servicios de nube personales), el tratamiento y transmisión de dichos datos pasará a regirse exclusivamente por los términos y políticas de privacidad de los proveedores terceros que hayas seleccionado, cesando en ese acto el control y la responsabilidad de NotyAlert.

### 3. Permisos de Android Declarados y Justificación Técnica Estricta
NotyAlert solicita de manera transparente y exclusiva los permisos de sistema estrictamente necesarios para su funcionamiento local:

| Permiso de Android | Justificación Técnica Específica |
| :--- | :--- |
| `android.permission.POST_NOTIFICATIONS` | Permite mostrar las notificaciones visuales y sonoras de los recordatorios en la barra de estado y pantalla de bloqueo (requerido a partir de Android 13+). |
| `android.permission.SCHEDULE_EXACT_ALARM` | Faculta a la app a registrar temporizadores de alta precisión mediante `AlarmManager` para que el sistema operativo despierte la alerta en el segundo exacto programado. |
| `android.permission.RECEIVE_BOOT_COMPLETED` | Permite que el receptor del sistema (`BootReceiver`) restablezca y reprograme automáticamente tus recordatorios activos con fecha futura si el teléfono se apaga o reinicia. |
| `android.permission.WAKE_LOCK` | Permite activar la CPU durante fracciones de segundo en el instante exacto programado para procesar la entrega de la notificación antes de que el dispositivo vuelva a suspensión. |
| `android.permission.VIBRATE` | Proporciona respuesta háptica física al interactuar con el calendario, botones y alarmas táctiles. |
| `android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Permite invitar al usuario a exentar a NotyAlert del cierre forzado por administradores agresivos de ahorro de batería OEM (MIUI/HyperOS, One UI, EMUI). |
| `android.permission.CAMERA` *(Opcional)* | Empleado de manera exclusiva para escanear códigos QR generados por NotyAlert para la importación local de recordatorios. **El procesamiento de imágenes ocurre en tiempo real y volátil en memoria RAM mediante ZXing; ninguna imagen, fotografía ni vídeo se graba, almacena en disco ni transmite a servidores**. |

### 4. Cero Rastreadores, Analíticas y Publicidad de Terceros
- NotyAlert **no contiene** SDKs de analítica (sin Google Analytics, Firebase Analytics ni Mixpanel).
- NotyAlert **no contiene** bibliotecas publicitarias (sin Google AdMob, Unity Ads, etc.).
- NotyAlert **no contiene** rastreadores de comportamiento, telemetría comercial ni librerías de vinculación a redes sociales.

### 5. Retención, Eliminación Definitiva de Datos y Derechos ARCO / RGPD
De conformidad con los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) bajo la legislación mexicana (LFPDPPP) y los derechos de supresión y portabilidad bajo el RGPD (GDPR):
- **Acceso y Rectificación**: Tienes acceso directo y control inmediato sobre todos tus datos desde la interfaz de la app para modificar o consultar cualquier recordatorio.
- **Eliminación Definitiva**: Puedes borrar recordatorios individuales en cualquier momento. Para eliminar de manera irreversible y definitiva todos los datos, ajustes y recordatorios almacenados por NotyAlert, basta con pulsar: `Ajustes del teléfono > Aplicaciones > NotyAlert > Almacenamiento > Borrar datos`, o bien **desinstalar la aplicación de tu dispositivo**. Al no existir copias en servidores remotos, la eliminación local es total, permanente e irrecuperable.

### 6. Privacidad de Menores (COPPA y RGPD-K)
NotyAlert no recopila datos de ningún tipo, por lo que es completamente segura para menores de edad. Cumple plenamente con la Children's Online Privacy Protection Act (COPPA), los principios del RGPD relativos a menores y la normativa mexicana de protección de datos.

### 7. Datos de Contacto del Responsable para Privacidad
Para cualquier consulta, aclaración o solicitud relacionada con esta Política de Privacidad o con el ejercicio de tus derechos, puedes ponerte en contacto directo con el desarrollador responsable:  
- **Responsable**: Mario Lira  
- **Correo Electrónico de Contacto**: `mario.alberto.lira.zamora@gmail.com`  
- **País**: Estados Unidos Mexicanos

### 8. Cambios a esta Política y Marco Regulatorio
Esta Política de Privacidad se rige bajo las leyes vigentes en los **Estados Unidos Mexicanos** y directrices internacionales aplicables. Cualquier ajuste futuro derivado de cambios técnicos en el sistema Android se publicará a través de la ficha oficial en Google Play Store y en el menú legal de la aplicación.

---

## 🇺🇸 English Version

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
