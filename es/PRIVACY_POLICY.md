# Política de Privacidad - NotyAlert

**Última actualización**: 20 de Octubre de 2026  
**Aplicación**: NotyAlert

---

En **NotyAlert**, valoramos y respetamos profundamente tu privacidad. La aplicación fue diseñada y desarrollada bajo el principio fundamental de **Privacidad por Diseño (Privacy by Design)** y funcionamiento 100% local (*offline-first*).

Esta Política de Privacidad describe cómo se gestiona la información en la aplicación móvil **NotyAlert** para Android.

### 1. Cero Recopilación de Información Personal (Zero Data Collection)
- **Sin servidores externos**: NotyAlert **no** recopila, no transmite a servidores remotos, no vende, no alquila ni comparte ningún tipo de información personal, datos identificativos ni telemetría.
- **Sin cuentas ni registro**: La aplicación no requiere que crees una cuenta, proporciones un correo electrónico, número de teléfono ni inicies sesión con ningún servicio de terceros.
- **Contenido de los recordatorios**: Los títulos, notas, horarios, frecuencias de alarma y preferencias que ingresas permanecen exclusivamente en tu dispositivo.

### 2. Almacenamiento Local y Control Total
- Toda la información generada por el usuario se guarda exclusivamente en la base de datos interna SQLite/Room alojada en el almacenamiento privado de la app en tu teléfono Android.
- Las funciones de respaldo o migración (exportación/importación en formato JSON o transferencia entre dispositivos mediante códigos QR) se ejecutan de manera 100% local en tu dispositivo, bajo tu explícita acción y control.

### 3. Permisos de Android y su Justificación
NotyAlert únicamente solicita los permisos estrictamente necesarios para cumplir con sus funciones esenciales de reloj despertador y recordatorios:

| Permiso | Justificación Técnica |
| :--- | :--- |
| `POST_NOTIFICATIONS` | Permite emitir alertas visuales y sonoras en el momento exacto programado (Android 13+). |
| `SCHEDULE_EXACT_ALARM` y `USE_EXACT_ALARM` | Requeridos por `AlarmManager` para garantizar que las alarmas suenen con precisión milimétrica de reloj despertador incluso con el teléfono bloqueado. |
| `RECEIVE_BOOT_COMPLETED` | Permite al receptor del sistema restaurar y reprogramar automáticamente tus alarmas activas si tu teléfono se reinicia o apaga. |
| `CAMERA` *(Opcional)* | Utilizado exclusivamente para escanear códigos QR de respaldo o transferencia de recordatorios. La cámara opera en tiempo real; **ninguna foto o vídeo se graba, almacena ni transfiere**. |
| `VIBRATE` | Proporciona respuesta háptica táctil en botones y calendario para una experiencia de uso premium. |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Permite solicitar al sistema excluir a NotyAlert del cierre forzado en segundo plano por parte de capas agresivas de fabricantes (MIUI, One UI, EMUI). |
| `WAKE_LOCK` | Despierta brevemente la CPU durante el milisegundo exacto en que se dispara una alarma programada para entregar la notificación antes de volver al reposo profundo. |

### 4. Cero Rastreadores y Publicidad de Terceros
- NotyAlert **no** incluye bibliotecas de análisis (como Firebase Analytics, Mixpanel o Google Analytics).
- NotyAlert **no** contiene redes publicitarias (AdMob, Unity Ads, etc.).
- NotyAlert **no** incluye SDKs de redes sociales ni rastreadores de comportamiento.

### 5. Retención y Eliminación de Datos (Derechos ARCO y GDPR)
Dado que no mantenemos copias de tus datos en servidores:
- Puedes eliminar recordatorios individuales deslizando o tocando el botón de eliminar dentro de la app.
- Puedes eliminar permanentemente todos tus datos en cualquier momento desde los ajustes de Android: `Ajustes > Aplicaciones > NotyAlert > Almacenamiento > Borrar datos`, o simplemente desinstalando la aplicación.

### 6. Privacidad de Menores (COPPA y GDPR-K)
NotyAlert es apta para todo público y no está dirigida de manera selectiva a menores ni recopila datos personales de menores de 13 años (o la edad mínima legal en tu jurisdicción). Al operar sin conexión ni almacenamiento externo, garantizamos un entorno digital completamente seguro para familias y menores.

### 7. Cambios a esta Política
Nos reservamos el derecho de actualizar esta Política de Privacidad para reflejar mejoras en la app o modificaciones legales. Cualquier actualización será comunicada a través de las notas de la versión en Google Play Store y en el menú legal de la aplicación.

### 8. Soporte y Contacto
Para dudas, sugerencias o soporte relacionados con NotyAlert, los canales oficiales de atención se encuentran disponibles directamente a través de la ficha de la aplicación en Google Play Store.
