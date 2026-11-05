# Política de Privacidad / Privacy Policy - NotyAlert

**Última actualización / Last updated**: 5 de Noviembre de 2026 / November 5, 2026  
**Aplicación / Application**: NotyAlert (Android)

---

## 🇲🇽 Versión en Español

En **NotyAlert**, valoramos y respetamos profundamente tu privacidad. La aplicación fue diseñada y desarrollada bajo el principio fundamental de **Privacidad por Diseño (Privacy by Design)**, funcionamiento 100% local (*offline-first*) y en estricto apego a la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**, su Reglamento y demás normatividad aplicable en los **Estados Unidos Mexicanos**.

Esta Política de Privacidad describe cómo se gestiona la información en la aplicación móvil **NotyAlert** para Android.

### 1. Cero Recopilación de Información Personal (Zero Data Collection)
- **Sin servidores externos**: NotyAlert **no** recopila, no transmite a servidores remotos, no vende, no alquila ni comparte ningún tipo de información personal, datos identificativos ni telemetría.
- **Sin cuentas ni registro**: La aplicación no requiere que crees una cuenta, proporciones un correo electrónico, número de teléfono ni inicies sesión con ningún servicio de terceros.
- **Contenido de los recordatorios**: Los títulos, notas, horarios, frecuencias de recordatorio y preferencias que ingresas permanecen exclusivamente en tu dispositivo.

### 2. Almacenamiento Local y Control Total
- Toda la información generada por el usuario se guarda exclusivamente en la base de datos interna SQLite/Room alojada en el almacenamiento privado de la app en tu teléfono Android.
- Las funciones de respaldo o migración (exportación/importación en formato JSON o transferencia entre dispositivos mediante códigos QR cifrados) se ejecutan de manera 100% local en tu dispositivo, bajo tu explícita acción y control.

### 3. Permisos de Android y Naturaleza Basada en Notificaciones
NotyAlert funciona enviando **notificaciones locales al teléfono** para recordarte lo que hayas programado (no es un reloj despertador sonoro de emergencia). Para ello solicita únicamente los permisos estrictamente necesarios:

| Permiso | Justificación Técnica |
| :--- | :--- |
| `POST_NOTIFICATIONS` | Permite mostrar en el teléfono las notificaciones de los recordatorios programados (Android 13+). |
| `SCHEDULE_EXACT_ALARM` y `USE_EXACT_ALARM` | Requeridos por `AlarmManager` de Android para que el sistema operativo entregue la notificación del recordatorio en la fecha y hora programadas. |
| `RECEIVE_BOOT_COMPLETED` | Permite al receptor del sistema restaurar y reprogramar automáticamente tus recordatorios activos si tu teléfono se reinicia o apaga. |
| `CAMERA` *(Opcional)* | Utilizado exclusivamente para escanear códigos QR de respaldo o transferencia de recordatorios. La cámara opera en tiempo real; **ninguna foto o vídeo se graba, almacena ni transfiere**. |
| `VIBRATE` | Proporciona respuesta háptica táctil en botones y calendario para una mejor experiencia de uso. |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Permite solicitar al sistema excluir a NotyAlert del cierre forzado en segundo plano por parte de capas agresivas de fabricantes (MIUI/HyperOS, One UI, EMUI) que bloquean el envío de notificaciones. |
| `WAKE_LOCK` | Despierta brevemente la CPU en el instante programado para entregar la notificación del recordatorio al teléfono antes de volver al reposo. |

### 4. Cero Rastreadores y Publicidad de Terceros
- NotyAlert **no** incluye bibliotecas de análisis (como Firebase Analytics, Mixpanel o Google Analytics).
- NotyAlert **no** contiene redes publicitarias (AdMob, Unity Ads, etc.).
- NotyAlert **no** incluye SDKs de redes sociales ni rastreadores de comportamiento.

### 5. Retención, Eliminación de Datos y Derechos ARCO
En cumplimiento con los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) previstos en la legislación mexicana (**LFPDPPP**) y estándares internacionales (GDPR), y dado que no mantenemos copias de tus datos en servidores:
- Puedes consultar, editar o eliminar recordatorios individuales en cualquier momento dentro de la app.
- Puedes eliminar permanentemente todos tus datos desde los ajustes de Android: `Ajustes > Aplicaciones > NotyAlert > Almacenamiento > Borrar datos`, o simplemente desinstalando la aplicación.

### 6. Privacidad de Menores
NotyAlert es apta para todo público y no recopila datos personales de menores ni de adultos. Al operar sin conexión ni almacenamiento externo, garantizamos un entorno digital completamente privado y seguro.

### 7. Legislación Aplicable y Jurisdicción
Esta Política de Privacidad se rige e interpreta de conformidad con las leyes y normas vigentes en los **Estados Unidos Mexicanos**.

### 8. Cambios a esta Política y Contacto
Nos reservamos el derecho de actualizar esta Política de Privacidad para reflejar mejoras en la app o modificaciones legales. Cualquier actualización será comunicada a través de Google Play Store y en el menú legal de la aplicación. Para dudas o soporte, utiliza los canales de contacto provistos en la ficha oficial de Google Play Store.

---

## 🇺🇸 English Version

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
- `POST_NOTIFICATIONS`: Displays scheduled reminder notifications on your phone.
- `SCHEDULE_EXACT_ALARM` & `USE_EXACT_ALARM`: Required by Android's `AlarmManager` so the operating system delivers the reminder notification at the scheduled time.
- `RECEIVE_BOOT_COMPLETED`: Reschedules active reminders automatically upon device reboot.
- `CAMERA` (Optional): Scans QR codes to import reminders. Images are never recorded or stored.
- `VIBRATE`: Provides subtle haptic feedback for user interactions.
- `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`: Prevents aggressive vendor task killers from blocking notification delivery.
- `WAKE_LOCK`: Temporarily wakes the CPU at the scheduled moment to deliver the notification.

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
