# Términos y Condiciones de Uso (TyC) / Terms and Conditions - NotyAlert

**Última actualización / Last updated**: 6 de Noviembre de 2026 / November 6, 2026  
**Aplicación / Application**: NotyAlert (Android)  
**Desarrollador / Developer**: Mario Lira (<mario.alberto.lira.zamora@gmail.com>)

---

## 🇲🇽 Versión en Español

### 1. Aceptación de los Términos y Perfeccionamiento del Contrato
Al descargar, instalar, adquirir, acceder o utilizar la aplicación móvil **NotyAlert**, el usuario declara ser mayor de edad o contar con la debida autorización legal y acepta expresamente quedar vinculado de manera irrevocable por los presentes Términos y Condiciones, así como por nuestra Política de Privacidad y el Acuerdo de Licencia de Usuario Final (EULA), todos ellos regidos por las leyes federales de los **Estados Unidos Mexicanos**. Si el usuario no está de acuerdo con la totalidad de estas estipulaciones, debe abstenerse de instalar la aplicación o desinstalarla y cesar todo uso de manera inmediata.

### 2. Naturaleza del Servicio: Recordatorios y Temporización Local
- **Operación Técnica Basada en Temporizadores y Notificaciones Locales**: NotyAlert es una utilidad de software diseñada para la asistencia en la organización y productividad personal cotidiana. Su funcionamiento técnico consiste en programar eventos de tiempo en el programador interno del sistema operativo Android (`AlarmManager`) y disparar notificaciones locales (`POST_NOTIFICATIONS`) visuales, sonoras y vibratorias, incluyendo ciclos repetitivos de insistencia configurados por el usuario (*Nagging Mode*).
- **Distinción respecto a Sistemas de Emergencia**: El usuario comprende que NotyAlert **NO es un dispositivo de alarma sonora física continua de emergencia, ni un reloj despertador de misión crítica, ni un equipo de advertencia de seguridad industrial**. Su emisión sonora y visual depende por completo de las configuraciones del teléfono (volumen de notificaciones, modo silencio/vibración, modos de concentración o *"No Molestar"*, y prioridades de los canales de notificación de Android).
- **Modelo Comercial de Pago Único**: NotyAlert se distribuye mediante una transacción de compra única (*one-time purchase*) procesada a través de Google Play Store, libre de tarifas periódicas recurrentes, costos ocultos o publicidad integrada.

### 3. Exclusión Total de Actividades de Alto Riesgo (No para Medicamentos ni Salud) ⚠️
> **ADVERTENCIA EXPRESA Y LIMITACIÓN ESTRICTA DE USO (*HIGH-RISK ACTIVITIES*)**:  
> NotyAlert está destinada exclusivamente a recordatorios cotidianos de baja criticidad (tareas domésticas, eventos informativos o notas de productividad).  
> 
> 1. **Prohibición Terminante en Salud y Medicina**: NotyAlert **NO está diseñada, certificada, testeada ni autorizada para recordar la toma de medicamentos**, tratamientos farmacológicos, suministro de insulina, citas médicas críticas, vigilancia epidemiológica, soporte vital ni ninguna intervención donde la demora u omisión de un aviso pueda comprometer la salud, integridad física o vida de una persona.
> 2. **Prohibición en Entornos de Misión Crítica**: Queda prohibido el uso de la aplicación en la operación de vehículos, maquinaria peligrosa, aviación, transporte público, seguridad de instalaciones o alertas ante siniestros.
> 3. **Prohibición ante Plazos Legales o Financieros Irreversibles**: La aplicación no debe emplearse como salvaguarda para el vencimiento de términos procesales judiciales, declaraciones fiscales perentorias, transacciones bursátiles o pagos comerciales sujetos a sanciones moratorias graves.
> 4. **Asunción Total y Exclusiva de Riesgo**: Cualquier uso de NotyAlert para los fines prohibidos en esta cláusula se considerará un acto unilateral y negligente del usuario, quien asume el 100% de la responsabilidad y el riesgo derivado, liberando al desarrollador de toda reclamación civil, penal, médica, administrativa o de cualquier otra índole.

### 4. Dependencia Técnica del Sistema Operativo, Batería y Factores Externos
El usuario reconoce y acepta de manera informada que la entrega y sonido oportuno de los recordatorios en Android está sujeta a contingencias técnicas ajenas al control del desarrollador:
- **Gestión Agresiva de Batería OEM**: Múltiples fabricantes (como Xiaomi/HyperOS/MIUI, Samsung/One UI, Huawei/EMUI, Oppo/ColorOS, Vivo/Funtouch, entre otros) incorporan administradores de energía privativos extremadamente agresivos que suspenden o destruyen procesos en segundo plano (*task killers*), bloqueando la ejecución del `AlarmManager` y el envío de notificaciones mientras la pantalla está apagada. Para mitigar esto, el usuario debe conceder manualmente a NotyAlert las excepciones de optimización de batería y permisos de inicio automático en los ajustes de su teléfono.
- **Modos Doze y App Standby**: El sistema Android suspende temporalmente las alarmas diferibles durante reposo profundo (*Doze mode*).
- **Permisos de Alarma Exacta**: En versiones modernas de Android (Android 12+), la entrega puntual requiere el permiso especial `SCHEDULE_EXACT_ALARM`. Si el usuario o el sistema operativo revocan dicho permiso, las alarmas perderán exactitud temporal.
- **Dispositivo Apagado o Batería Agotada**: Si el teléfono se encuentra apagado o sin batería al llegar la hora programada, el sistema no encenderá el teléfono ni ejecutará la alerta. Al encenderse, NotyAlert reprogramará los recordatorios con fecha futura mediante `RECEIVE_BOOT_COMPLETED`, pero las alertas programadas cuya hora haya transcurrido durante el apagado no sonarán de manera retroactiva.
- **Modificaciones en Canales de Notificación**: Si el usuario silencia, minimiza o desactiva el Canal de Notificaciones de NotyAlert desde la configuración del sistema, o activa el modo "No Molestar", el sonido quedará inhibido por orden del sistema operativo.

### 5. Exclusión de Garantías ("AS IS") y Límite Cuantitativo de Responsabilidad (*Cap on Liability*)
- **Suministro "Tal Cual"**: NotyAlert se pone a disposición del usuario "TAL CUAL" (*AS IS*) y "SEGÚN DISPONIBILIDAD" (*AS AVAILABLE*), sin garantías de ningún tipo, expresas o implícitas, incluyendo sin limitación garantías de comerciabilidad, idoneidad para un propósito particular, disponibilidad ininterrumpida o ausencia total de errores de software.
- **Deslinde de Daños Consecuenciales**: En la máxima medida autorizada por la ley aplicable, el desarrollador no será responsable frente al usuario ni frente a terceros por daños indirectos, incidentales, punitivos, especiales, lucro cesante, pérdida de ingresos, pérdida de oportunidades de negocio, daños a la salud o pérdidas de información local ocasionadas por el uso, mal uso, retraso o falla en la entrega de notificaciones de NotyAlert.
- **Tope Máximo de Responsabilidad Patrimonial (*Cap on Liability*)**: En aquellos supuestos en que la legislación aplicable no permita la exclusión absoluta de responsabilidad, la responsabilidad total acumulada del desarrollador frente al usuario por cualquier reclamación, demanda o acción contractual o extracontractual, **quedará expresamente limitada al monto neto efectivamente pagado por el usuario por la compra de NotyAlert en Google Play Store**.

### 6. Condiciones Comerciales, Pagos y Reembolsos (Google Play Billing)
- **Comerciante de Registro (*Merchant of Record*)**: La comercialización, cobro, facturación, retención de impuestos locales y procesamiento de pago de NotyAlert se efectúa de manera exclusiva a través de **Google Play Store (Google LLC)**. El desarrollador no tiene acceso a sus datos bancarios, instrumentos de pago ni números de tarjeta.
- **Gestión de Reembolsos**: Toda solicitud de reembolso o devolución se rige en su totalidad por las **Políticas de Reembolso de Google Play Store**. Si el usuario no queda satisfecho con el software, deberá canalizar su solicitud de devolución a través de los mecanismos automatizados de Google Play en los plazos y condiciones definidos por Google.
- **Consumidores de la Unión Europea**: De conformidad con la Directiva Europea de Derechos del Consumidor (Directiva 2011/83/UE), el usuario reconoce y consiente que, al comenzar la descarga o instalación del contenido digital, la ejecución de la prestación da inicio de forma inmediata, perdiendo expresamente su derecho de desistimiento de 14 días conforme al régimen de excepciones de suministro de software digital.

### 7. Actualizaciones, Divisibilidad, Ley Aplicable y Jurisdicción
- **Actualizaciones y Modificaciones**: El desarrollador se reserva el derecho de lanzar actualizaciones, mejoras o correcciones del software a través de Google Play Store, así como de actualizar estos Términos y Condiciones. El uso continuado de la app tras la publicación de cambios implicará la aceptación plena de los mismos.
- **Divisibilidad (*Severability*)**: Si alguna cláusula de estos términos fuera declarada nula o inejecutable por una autoridad judicial, las cláusulas restantes mantendrán su plena vigencia, validez y eficacia.
- **Ley Aplicable y Jurisdicción**: Estos Términos y Condiciones se rigen, interpretan y ejecutan bajo las leyes federales de los **Estados Unidos Mexicanos** (incluyendo el Código Civil Federal y el Código de Comercio). Para dirimir cualquier conflicto, controversia o reclamación derivada de la aplicación, el usuario y el desarrollador se someten irrevocablemente a la jurisdicción exclusiva de los tribunales competentes de los Estados Unidos Mexicanos, renunciando a cualquier fuero que por razón de domicilio pudiera corresponderles, sin perjuicio de los derechos imperativos e irrenunciables que asistan a los consumidores conforme a la legislación obligatoria de su lugar de residencia habitual.

---

## 🇺🇸 English Version

### 1. Acceptance of Terms & Contract Formation
By downloading, installing, purchasing, accessing, or using the **NotyAlert** mobile application, you represent that you are of legal age or possess legal capacity, and expressly and irrevocably agree to be bound by these Terms and Conditions, our Privacy Policy, and the End User License Agreement (EULA), all governed under the federal laws of the **United Mexican States**. If you do not agree with any part of these terms, you must not install or use the application and must immediately uninstall it.

### 2. Nature of Service: Local Reminders & Scheduling
- **Technical Operation via Local Timers and Notifications**: NotyAlert is a personal productivity and everyday reminder software utility. Its technical operation consists of scheduling events in the Android operating system scheduler (`AlarmManager`) and triggering standard local visual, audible, and haptic notifications (`POST_NOTIFICATIONS`), including user-configured persistent repetition cycles (*Nagging Mode*).
- **Distinction from Emergency Systems**: You acknowledge that NotyAlert **is NOT an emergency continuous hardware alarm, a mission-critical alarm clock, or an industrial life-safety notification tool**. Audible and visual delivery depends entirely on device settings (notification volume, silent/vibrate mode, "Do Not Disturb" focus modes, and Android notification channel priorities).
- **One-Time Purchase Model**: NotyAlert is distributed as a one-time upfront purchase processed via Google Play Store, free of recurring subscriptions, hidden fees, or embedded advertisements.

### 3. Absolute Exclusion of High-Risk Activities (Not for Medication or Health) ⚠️
> **EXPRESS WARNING & STRICT USE RESTRICTION (*HIGH-RISK ACTIVITIES*)**:  
> NotyAlert is intended exclusively for low-criticality everyday personal tasks (household chores, informational notes, personal scheduling).  
> 
> 1. **Strict Prohibition on Medical & Health Use**: NotyAlert is **NOT designed, validated, certified, or intended for reminding you to take prescription medications**, pharmaceutical dosing, insulin administration, critical medical appointments, life support, or any health intervention where a delayed or missed alert could endanger human life or health.
> 2. **Prohibition in Mission-Critical Contexts**: Using the application in connection with operating vehicles, dangerous machinery, aviation, mass transit, facility security, or disaster alerting is strictly forbidden.
> 3. **Prohibition for Peremptory Legal or Financial Deadlines**: The application must not be relied upon to safeguard judicial statutes of limitations, strict tax filing deadlines, financial exchange trading windows, or commercial deadlines subject to significant default penalties.
> 4. **Sole & Absolute Assumption of Risk**: Any use of NotyAlert for any prohibited high-risk purpose is undertaken at your sole and absolute risk and liability. You unconditionally release the developer from any and all legal, medical, administrative, or financial liability.

### 4. Technical Dependence on Android OS, Battery & External Factors
You understand and agree that timely reminder delivery on Android is subject to technical conditions beyond the developer's control:
- **Aggressive OEM Battery Optimizers**: Multiple device manufacturers (including Xiaomi/HyperOS/MIUI, Samsung/One UI, Huawei/EMUI, Oppo/ColorOS, Vivo/Funtouch, and others) implement proprietary power-management task killers that kill background processes, preventing `AlarmManager` alerts from ringing while the screen is locked. To ensure timely delivery, you must manually grant battery optimization exemptions and autostart permissions in your device settings.
- **Doze & App Standby Modes**: Android temporarily defers standard alarms during deep sleep (*Doze mode*).
- **Exact Alarm Permissions**: On modern Android versions (Android 12+), exact delivery requires the special `SCHEDULE_EXACT_ALARM` permission. If you or the OS revoke this permission, reminder delivery times may be deferred by the system.
- **Powered-Off Device or Depleted Battery**: If the phone is powered off or battery is drained at the scheduled alert time, Android cannot physically execute the alert. Upon powering back on, NotyAlert reschedules future reminders via `RECEIVE_BOOT_COMPLETED`, but alerts that elapsed while the device was off will not ring retroactively.
- **Notification Channel Adjustments**: If you mute, minimize, disable NotyAlert's notification channel in Android system settings, or enable "Do Not Disturb" without exception rules, alert sounds will be suppressed by the operating system.

### 5. Disclaimer of Warranties ("AS IS") & Monetary Cap on Liability
- **Provided "AS IS"**: NotyAlert is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, whether express, implied, or statutory, including without limitation warranties of merchantability, fitness for a particular purpose, uninterrupted operation, or error-free performance.
- **Exclusion of Consequential Damages**: To the maximum extent permitted by applicable law, the developer shall not be liable to you or any third party for any indirect, incidental, special, punitive, or consequential damages, loss of profits, loss of revenue, business interruption, health complications, or loss of local data arising from the use or inability to use the software, or from missed or delayed notifications.
- **Monetary Cap on Liability**: In jurisdictions where absolute liability exclusions are restricted, the developer's total aggregate liability arising out of or related to this agreement or the software **shall be strictly limited to the actual amount paid by you for the purchase of NotyAlert on Google Play Store**.

### 6. Commercial Terms, Billing & Refunds (Google Play Billing)
- **Merchant of Record**: Distribution, payment processing, tax withholding, and billing for NotyAlert are handled exclusively by **Google Play Store (Google LLC)**. The developer has no direct access to your financial accounts or credit card data.
- **Refund Policy**: All refund requests are governed solely by the **Google Play Refund Policy**. If you are unsatisfied with the app, you must submit your refund request directly through Google Play's automated refund tools within the timeframes established by Google.
- **European Union Consumers**: Pursuant to the EU Consumer Rights Directive (Directive 2011/83/EU), you acknowledge and agree that digital performance begins immediately upon the start of download/installation and you expressly waive your 14-day statutory right of withdrawal in accordance with digital content supply rules.

### 7. Updates, Severability, Governing Law & Jurisdiction
- **Updates**: The developer reserves the right to release updates, feature improvements, or bug fixes via Google Play Store, and to amend these Terms. Continued use of the app constitutes acceptance of any modified terms.
- **Severability**: If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
- **Governing Law & Jurisdiction**: These Terms are governed by and construed in accordance with the federal laws of the **United Mexican States** (including the Federal Civil Code and Commercial Code). Any dispute or claim arising hereunder shall be subject to the exclusive jurisdiction of the competent courts of the United Mexican States, waiving any other jurisdiction by reason of domicile, without prejudice to non-waivable statutory rights granted to consumers under the mandatory laws of their home jurisdiction.
