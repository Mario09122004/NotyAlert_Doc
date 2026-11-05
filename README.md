# NotyAlert

> **Aplicación nativa para Android de recordatorios recurrentes inteligentes, alarmas de alta precisión y funcionamiento 100% local (sin backend ni conexión a internet), optimizada para un consumo de batería mínimo y con una interfaz moderna y minimalista inspirada en el sistema de diseño shadcn/ui.**

---

## Tabla de Contenidos
1. [Visión y Filosofía](#visión-y-filosofía)
2. [Características Principales](#características-principales)
3. [Stack Tecnológico y Arquitectura](#stack-tecnológico-y-arquitectura)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Requisitos Previos y Compilación](#requisitos-previos-y-compilación)
6. [Guía para Subir a GitHub (Repositorio Privado)](#guía-para-subir-a-github-repositorio-privado)
7. [Permisos de Android Declarados](#permisos-de-android-declarados)
8. [Créditos y Licencia](#créditos-y-licencia)

---

## Visión y Filosofía

NotyAlert fue concebida bajo el principio de **Privacy by Design** (Privacidad por diseño) y eficiencia absoluta en el sistema operativo Android:
- **Cero Backend**: Todos los datos, recordatorios y preferencias se guardan de forma local en la base de datos interna SQLite mediante Room.
- **Sin Conexión ni Cuentas**: No requiere registro, correo electrónico, servidores en la nube ni conexión a internet.
- **Sin Rastreadores ni Anuncios**: Cero telemetría, bibliotecas de análisis de datos o SDKs publicitarios.
- **Bajo Consumo de Batería**: A diferencia de apps que mantienen servicios en primer plano constantes (foreground services invasivos), NotyAlert utiliza `AlarmManager` con alarmas exactas y `WorkManager` con un sincronizador a la medianoche, permitiendo al dispositivo entrar en reposo profundo (*Doze mode*) sin perder ninguna alerta.

---

## Características Principales

### 1. Múltiples Horarios por Alerta (Multiple Alert Times)
- Programa un recordatorio para que suene **una o varias veces durante el día** dentro de la misma tarjeta (por ejemplo: dosis de medicamentos o insulina en la mañana, tarde y noche: `08:00, 14:00, 20:00`).
- **Presets Rápidos con 1 toque**:
  - *Mañana, tarde y noche* (`08:00, 14:00, 20:00`)
  - *Cada 8 horas* (`08:00, 16:00, 00:00`)
  - *Cada 6 horas* (`06:00, 12:00, 18:00, 00:00`)
  - *Mañana y noche* (`08:00, 20:00`)
- Soporte para agregar y eliminar horarios personalizados dinámicamente con chips táctiles.

### 2. Frecuencias de Recurrencia Avanzadas
- **Diaria**: Repite todos los días.
- **Semanal / Modo Alarma**: Selección de días específicos de la semana (L, M, X, J, V, S, D) con accesos rápidos: *Entre semana*, *Fin de semana* o *Todos los días*.
- **Mensual**: Repite en el mismo número de día cada mes.
- **Anual**: Ideal para cumpleaños y aniversarios (con gestión correcta para el 29 de febrero en años no bisiestos).
- **Cada 'X' Días**: Intervalos personalizados flexibles (ej. cada 3 días, cada 25 días).

### 3. Sistema de Insistencia (Nagging Mode)
- Alertas continuas para tareas críticas que no puedes olvidar.
- Configura el intervalo de repetición (ej. cada 15, 30 o 60 minutos).
- **Ventana de horario de atención**: Define la hora de inicio y de fin (ej. 08:00 a 21:00) para garantizar que las insistencias no interrumpan tus horas de descanso.

### 4. Acciones Rápidas en Notificaciones
- Botón rápido **"Realizado"**: Registra la tarea como completada para el día actual y cancela automáticamente las alarmas restantes del día, programando la siguiente ocurrencia futura.
- Botón rápido **"Posponer 15 min"**: Programa una alarma exacta para dentro de un cuarto de hora.
- Canales de notificación con alta prioridad, sonido y vibración configurada.

### 5. Calendario Interactivo Mensual
- Vista de cuadrícula mensual con insignias (*badges*) numéricas que señalan los recordatorios programados para cada día.
- Navegación fluida entre meses.
- Toca cualquier fecha para inspeccionar sus recordatorios o crear uno nuevo preseleccionando dicho día.

### 6. Diseño Minimalista shadcn/ui & Personalización Total
- **Modos de Tema**:
  - *Predeterminado del sistema*: Sigue el modo claro/oscuro de Android.
  - *Tema Claro*: Fondo blanco puro (`#FFFFFF`) y textos de alto contraste.
  - *Tema Oscuro*: Fondo oscuro profundo (`#09090B` / `#18181B`).
- **Paleta de Colores de Acento**:
  - Rojo Carmesí (Predeterminado)
  - Azul Eléctrico
  - Violeta Intenso
  - Verde Esmeralda
  - Naranja Ámbar
  - Rosa Fucsia
- **Feedback Háptico**: Vibración táctil sutil configurable en botones e interacciones.
- **Barras de Sistema Sincronizadas**: Integración con `WindowInsetsControllerCompat` para contrastes limpios en barra de estado y barra de navegación.

### 7. Transferencia y Respaldo 100% Offline (QR & JSON)
- **Migración vía Códigos QR**: Transfiere recordatorios de un teléfono a otro mostrando un código QR en pantalla y escaneándolo con la cámara, sin requerir cables, Bluetooth ni conexión a internet. Soporta paginación automática si la lista de recordatorios es extensa.
- **Copia de Seguridad JSON**: Guarda o carga un archivo `.json` en el almacenamiento de tu teléfono para restaurar todas tus alertas en cualquier momento.
- **Compartir Individual**: Comparte cualquier recordatorio puntual como imagen QR o texto formateado.

### 8. Tutorial Interactivo Spotlight
- Guía interactiva de 12 pasos con efecto de foco y recorte oscuro (*spotlight cutout*).
- Auto-scroll asistido que desplaza suavemente la pantalla hacia el campo o elemento enfocado.
- Se puede omitir en cualquier momento o reactivar desde el menú de ajustes.

### 9. Asistente de Optimización de Batería por Fabricante
- Guía visual y accesos directos al menú de ajustes del sistema para configurar el ahorro de energía en capas de personalización agresivas:
  - **Xiaomi / Redmi / POCO** (MIUI / HyperOS - Inicio automático y sin restricciones).
  - **Samsung** (One UI - Batería no restringida).
  - **Huawei** (EMUI - Gestión manual de inicio).
  - **OPPO / Realme / OnePlus** (ColorOS / OxygenOS).
  - Android AOSP / Pixel.

### 10. Localización Bilingüe Completa (i18n)
- Soporte 100% en **Español** e **Inglés**.
- Selector rápido en el menú desplegable (Sistema, Español, Inglés).
- Tablas de cadenas sincronizadas con paridad total de claves y validación de especificadores de formato.

---

## Stack Tecnológico y Arquitectura

NotyAlert sigue las mejores prácticas recomendadas por Google y la arquitectura limpia **MVVM / MVI** con flujo unidireccional de datos (*Unidirectional Data Flow - UDF*):

| Componente | Tecnología / Librería | Propósito |
| :--- | :--- | :--- |
| **Lenguaje** | Kotlin 1.9+ | Lenguaje oficial con soporte estricto de nulos |
| **UI Framework** | Jetpack Compose + Material 3 | Interfaz declarativa moderna y reactiva |
| **Diseño / Tokens** | shadcn/ui Jetpack Compose | Paletas neutras monocromáticas + color de acento |
| **Base de Datos** | Room Persistence Library | Base de datos local SQLite con TypeConverters |
| **Concurrencia** | Kotlin Coroutines & Flow | Operaciones reactivas asíncronas en hilos de I/O |
| **Segundo Plano** | WorkManager | Trabajo periódico a la medianoche (`DailySyncWorker`) |
| **Alarmas Exactas** | AlarmManager (`setExactAndAllowWhileIdle`) | Disparo puntual de alertas incluso en reposo |
| **Receptores** | BroadcastReceiver | `NotificationReceiver`, `ActionReceiver`, `BootReceiver` |
| **Preferencias** | SharedPreferences / DataStore | Persistencia de tema, color, idioma y tutorial |
| **Cámara & QR** | CameraX + ZXing Embedded | Escáner y generador de códigos QR locales |
| **Pruebas** | JUnit 4 | Pruebas unitarias de cálculo de fechas y recurrencias |

---

## Estructura del Proyecto

```text
NotyMe/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/notyme/
│   │   │   │   ├── data/
│   │   │   │   │   ├── local/              # Base de datos Room (Entity, DAO, Database)
│   │   │   │   │   ├── model/              # Modelos de dominio y enums de recurrencia
│   │   │   │   │   └── repository/         # Implementación de repositorios
│   │   │   │   ├── receiver/               # BroadcastReceivers (Notification, Action, Boot)
│   │   │   │   ├── ui/
│   │   │   │   │   ├── components/         # Tarjetas, botones, selectores y Spotlight
│   │   │   │   │   │   └── dialogs/        # Diálogos (Tema, Color, Idioma, Legal, QR)
│   │   │   │   │   ├── navigation/         # Pestañas y estados de navegación
│   │   │   │   │   ├── screens/
│   │   │   │   │   │   ├── create/         # BottomSheet de creación/edición de alertas
│   │   │   │   │   │   └── home/           # Pantalla principal (Lista y Calendario)
│   │   │   │   │   ├── theme/              # Tokens shadcn, Color, Shape, Theme y ThemeMode
│   │   │   │   │   ├── MainActivity.kt     # Punto de entrada de la aplicación
│   │   │   │   │   └── ReminderViewModel.kt# ViewModel central con StateFlow reactivo
│   │   │   │   ├── util/                   # Helpers (DateTimeUtils, AlarmScheduler, NotificationHelper, etc.)
│   │   │   │   └── worker/                 # WorkManager (DailySyncWorker a las 00:00)
│   │   │   ├── res/
│   │   │   │   ├── values/strings.xml      # Tabla base de cadenas en Inglés
│   │   │   │   ├── values-es/strings.xml   # Tabla localizada de cadenas en Español
│   │   │   │   ├── values-en/strings.xml   # Tabla localizada de cadenas en Inglés
│   │   │   │   └── xml/                    # FileProvider, shortcuts y locales_config
│   │   │   └── AndroidManifest.xml         # Permisos, receivers, actividades y providers
│   │   └── test/                           # Pruebas unitarias (DateTimeUtilsTest)
│   └── build.gradle.kts                    # Dependencias y configuración del módulo app
├── gradle/                                 # Gradle wrapper
├── .gitignore                              # Reglas de exclusión para control de versiones
├── build.gradle.kts                        # Configuración raíz de Gradle
├── gradle.properties                       # Flags de JVM, AndroidX y configuración cache
├── settings.gradle.kts                     # Repositorios y resolución de plugins
└── README.md                               # Documentación principal del proyecto
```

---

## Requisitos Previos y Compilación

### Requisitos del Entorno
- **JDK**: Java Development Kit 17 o superior.
- **Android SDK**: Compile SDK 34 (Android 14) / Min SDK 26 (Android 8.0 Oreo).
- **Gradle**: 8.x (incluido a través de `./gradlew`).

### Comandos de Compilación

1. **Ejecutar Pruebas Unitarias**:
   ```bash
   ./gradlew testDebugUnitTest
   ```

2. **Compilar APK de Depuración (Debug)**:
   ```bash
   ./gradlew assembleDebug
   ```
   *El archivo generado se ubicará en: `app/build/outputs/apk/debug/app-debug.apk`.*

3. **Compilar Bundle de Producción (Release)**:
   ```bash
   ./gradlew bundleRelease
   ```

---

## Guía para Subir a GitHub (Repositorio Privado)

El archivo `.gitignore` del proyecto ya ha sido preconfigurado de forma exhaustiva para ignorar archivos binarios pesados (`.apk`, `.aab`), cachés de compilación (`build/`, `.gradle/`, `.idea/`) y claves o rutas de SDK locales (`local.properties`).

Sigue estos sencillos pasos desde la terminal en el directorio raíz del proyecto:

### Paso 1: Inicializar el repositorio Git local (si aún no está creado)
```bash
git init
```

### Paso 2: Crear la rama principal (`main`)
```bash
git branch -M main
```

### Paso 3: Agregar los archivos al área de preparación (*staging*)
```bash
git add .
```

> **Verificación preventiva**: Puedes escribir `git status` para comprobar que archivos como `local.properties` o `.apk` no estén marcados para subirse.

### Paso 4: Realizar el primer commit
```bash
git commit -m "feat: initial commit - NotyMe native recurring reminders app"
```

### Paso 5: Crear el repositorio en GitHub
1. Abre tu navegador e ingresa a [GitHub.com/new](https://github.com/new).
2. Asigna un nombre al repositorio (por ejemplo, `NotyMe`).
3. **Importante**: Selecciona la opción **Private** (Privado) para mantener el código accesible únicamente por ti.
4. **No** marques las opciones de agregar un README, .gitignore o licencia, ya que el proyecto ya cuenta con ellos.
5. Haz clic en **Create repository**.

### Paso 6: Vincular tu repositorio remoto y subir el código
Copia y ejecuta los siguientes comandos reemplazando `TU_USUARIO` con tu nombre de usuario de GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO/NotyMe.git
git push -u origin main
```

*(Si utilizas autenticación SSH)*:
```bash
git remote add origin git@github.com:TU_USUARIO/NotyMe.git
git push -u origin main
```

---

## Permisos de Android Declarados

| Permiso | Justificación |
| :--- | :--- |
| `POST_NOTIFICATIONS` | Mostrar notificaciones visuales y sonoras en Android 13+ (API 33+). |
| `SCHEDULE_EXACT_ALARM` | Requerido por `AlarmManager` para disparar alertas con precisión de reloj despertador. |
| `USE_EXACT_ALARM` | Garantiza la entrega de alarmas exactas en Android 14+. |
| `RECEIVE_BOOT_COMPLETED` | Restaura y reprograma automáticamente las alarmas activas tras reiniciar el dispositivo. |
| `WAKE_LOCK` | Despierta brevemente la CPU al dispararse la alarma para emitir la notificación. |
| `VIBRATE` | Proporciona respuesta háptica táctil en la interfaz de usuario. |
| `CAMERA` *(Opcional)* | Usado exclusivamente para escanear códigos QR de respaldo. Las imágenes nunca se guardan ni envían. |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Permite solicitar exención de optimización de batería para evitar que el sistema suspenda las alarmas. |

---

## Créditos y Licencia

- **Proyecto**: NotyAlert
- **Política de Privacidad**: [PRIVACY_POLICY.md](PRIVACY_POLICY.md)
- **Términos y Condiciones / EULA**: [TERMS_AND_CONDITIONS.md](TERMS_AND_CONDITIONS.md)
- **Guía Play Console Data Safety**: [PLAYSTORE_DATA_SAFETY.md](PLAYSTORE_DATA_SAFETY.md)
- **Licencia de Software**: Todos los derechos reservados. NotyAlert. Bibliotecas de terceros bajo licencia Apache 2.0.
