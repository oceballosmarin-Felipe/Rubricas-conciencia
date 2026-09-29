const appData = {
  1: {
    title: "Capítulo 1: Fundamentos de la Conciencia Humana",
    rubrics: [
      {
        title: "Rúbrica 1: Diario de Reflexión 'Mi Mapa de Conciencia'",
        criteria: [
          { name: "Profundidad de la Reflexión", weight: 0.40, desc: "El estudiante explora de manera genuina su conciencia individual, cuestionando sus propios patrones de pensamiento y creencias. El nivel 5 demuestra una introspección notable." },
          { name: "Conexión de Conceptos", weight: 0.30, desc: "El estudiante establece vínculos claros entre su experiencia personal y los conceptos de conciencia individual, social y colectiva." },
          { name: "Claridad y Coherencia", weight: 0.30, desc: "La escritura es clara, bien organizada y fácil de seguir. Se utilizan los términos del capítulo de forma precisa." }
        ]
      },
      {
        title: "Rúbrica 2: Taller 'Debate Socrático sobre los Niveles de Conciencia'",
        criteria: [
          { name: "Participación Activa y Respetuosa", weight: 0.40, desc: "Participa de manera constructiva, escucha activamente y respeta opiniones divergentes. Demuestra liderazgo y capacidad de mediación." },
          { name: "Argumentación y Pensamiento Crítico", weight: 0.40, desc: "Los argumentos demuestran una comprensión profunda de los niveles de conciencia (biológico, cognitivo, trascendental)." },
          { name: "Capacidad de Síntesis y Conclusión", weight: 0.20, desc: "Sintetiza las ideas clave del debate y contribuye a una conclusión colectiva que integra los diferentes puntos de vista." }
        ]
      },
      {
        title: "Rúbrica 3: Ejercicio de Aplicación 'Creando un Relato Consciente'",
        criteria: [
          { name: "Creatividad y Originalidad", weight: 0.30, desc: "El relato propuesto es original y utiliza la narrativa de forma creativa para ilustrar un concepto de la conciencia." },
          { name: "Fidelidad Conceptual", weight: 0.40, desc: "La historia o relato refleja con precisión uno o varios de los fundamentos de la conciencia humana presentados en el capítulo." },
          { name: "Estructura y Narrativa", weight: 0.30, desc: "La narrativa es clara, coherente y bien estructurada. Logra captar la atención y comunicar eficazmente la idea central." }
        ]
      }
    ]
  },
  2: {
    title: "Capítulo 2: Conciencia y Salud Integral (Física y Mental)",
    rubrics: [
      {
        title: "Rúbrica 1: Proyecto 'Protocolo de Autocuidado Consciente'",
        criteria: [
          { name: "Identificación de Necesidades", weight: 0.30, desc: "Identifica de manera clara y honesta sus propias necesidades en salud física, mental y emocional." },
          { name: "Diseño de Estrategias", weight: 0.40, desc: "El protocolo incluye una variedad de estrategias (físicas, mentales, emocionales), es realista y demuestra comprensión de los conceptos." },
          { name: "Profundidad de la Reflexión", weight: 0.30, desc: "Reflexiona sobre el proceso de creación del protocolo y los desafíos que enfrenta para su implementación." }
        ]
      },
      {
        title: "Rúbrica 2: Taller 'Mapeo de Estresores Académicos'",
        criteria: [
          { name: "Participación Activa", weight: 0.40, desc: "Participa de manera constructiva, aportando experiencias y escuchando a los demás." },
          { name: "Análisis Crítico", weight: 0.40, desc: "Demuestra comprensión de las causas del estrés y propone soluciones concretas." },
          { name: "Colaboración y Empatía", weight: 0.20, desc: "Colabora de manera efectiva, mostrando empatía hacia las experiencias de sus compañeros." }
        ]
      },
      {
        title: "Rúbrica 3: Actividad 'Diario de Emociones y Hábitos Conscientes'",
        criteria: [
          { name: "Regularidad y Consistencia", weight: 0.40, desc: "Mantiene el diario de manera regular durante el periodo establecido." },
          { name: "Análisis y Conexión", weight: 0.40, desc: "Analiza patrones observados en el diario y conecta sus estados emocionales con sus hábitos de vida." },
          { name: "Claridad y Sinceridad", weight: 0.20, desc: "Las reflexiones son claras, honestas y demuestran una autoconciencia creciente." }
        ]
      }
    ]
  },
  3: {
    title: "Capítulo 3: El Rol del Docente en la Formación Ética y la Conciencia",
    rubrics: [
      {
        title: "Rúbrica 1: Taller de Dilemas Éticos",
        criteria: [
          { name: "Análisis del Dilema Ético", weight: 0.40, desc: "Identifica los principios éticos en conflicto y analiza las consecuencias para las partes involucradas." },
          { name: "Justificación de la Solución", weight: 0.30, desc: "Fundamenta la propuesta de solución en principios éticos sólidos y valores pedagógicos de la conciencia." },
          { name: "Colaboración y Diálogo", weight: 0.30, desc: "Escucha con respeto las opiniones de otros y argumenta sus puntos de vista con apertura." }
        ]
      },
      {
        title: "Rúbrica 2: Diario de Campo de la Conciencia",
        criteria: [
          { name: "Observación Auténtica", weight: 0.40, desc: "Registra de forma objetiva y reflexiva incidentes críticos de la práctica docente diaria." },
          { name: "Análisis Crítico de la Práctica", weight: 0.30, desc: "Cuestiona las propias decisiones pedagógicas e identifica oportunidades de mejora deontológica." },
          { name: "Propuestas de Transformación", weight: 0.30, desc: "Formula compromisos concretos para ajustar la práctica pedagógica hacia un enfoque más consciente." }
        ]
      }
    ]
  },
  4: {
    title: "Capítulo 4: Implementación y Evaluación de la Ética Profesional",
    rubrics: [
      {
        title: "Rúbrica 1: Simulación de un Dilema Ético Profesional",
        criteria: [
          { name: "Identificación de Conflictos Éticos", weight: 0.40, desc: "Reconoce los desacuerdos entre el deber ser, los marcos normativos y los desafíos contextuales de la era digital." },
          { name: "Propuesta de Solución Holística", weight: 0.30, desc: "Diseña un plan de acción viable, éticamente sostenible y comprometido con la transparencia." },
          { name: "Habilidad de Argumentación", weight: 0.30, desc: "Sostiene sus posturas frente a réplicas, utilizando pensamiento crítico y coherencia ético-profesional." }
        ]
      },
      {
        title: "Rúbrica 2: Diario de Incidentes Críticos",
        criteria: [
          { name: "Sistematización del Evento", weight: 0.40, desc: "Documenta detalladamente el contexto, los actores e implicaciones del incidente ético seleccionado." },
          { name: "Reflexión Deontológica", weight: 0.30, desc: "Evalúa las reacciones iniciales e identifica el impacto ético de las decisiones tomadas." },
          { name: "Lecciones Aprendidas", weight: 0.30, desc: "Extrae aprendizajes aplicables a situaciones futuras en el ejercicio profesional." }
        ]
      },
      {
        title: "Rúbrica 3: Taller 'Diseño del Código de Ética'",
        criteria: [
          { name: "Coherencia del Marco Valórico", weight: 0.40, desc: "Sintetiza principios de responsabilidad, equidad e integridad en lineamientos normativos claros." },
          { name: "Aplicabilidad y Viabilidad", weight: 0.30, desc: "Los artículos del código responden a situaciones reales de la disciplina profesional." },
          { name: "Claridad Redaccional", weight: 0.30, desc: "Redacta postulados claros, categóricos y articulados conceptualmente." }
        ]
      }
    ]
  },
  5: {
    title: "Capítulo 5: Conciencia Investigativa y Derechos Humanos",
    rubrics: [
      {
        title: "Rúbrica 1: Diseño de Protocolo de Investigación Ético",
        criteria: [
          { name: "Aplicación de Principios Éticos", weight: 0.40, desc: "Garantiza el consentimiento informado, la confidencialidad y el respeto irrestricto por la dignidad humana." },
          { name: "Impacto Social y Derechos Humanos", weight: 0.30, desc: "Evalúa los riesgos y beneficios de la investigación en poblaciones vulnerables o diversas." },
          { name: "Originalidad y Viabilidad Metodológica", weight: 0.30, desc: "Propone herramientas de recolección de datos coherentes con los principios de investigación consciente." }
        ]
      },
      {
        title: "Rúbrica 2: Diario de Reflexión Investigativa",
        criteria: [
          { name: "Autocrítica del Rol del Investigador", weight: 0.40, desc: "Cuestiona sesgos personales, relaciones de poder e implicaciones éticas en el campo." },
          { name: "Rigor y Cuidado Epistemológico", weight: 0.30, desc: "Demuestra honestidad intelectual en el manejo, interpretación y cita de fuentes." },
          { name: "Compromiso de Transformación Social", weight: 0.30, desc: "Vincula los hallazgos con la búsqueda de soluciones a problemáticas comunitarias." }
        ]
      }
    ]
  },
  6: {
    title: "Capítulo 6: Investigación-Acción Participativa (IAP) y Conciencia Transformadora",
    rubrics: [
      {
        title: "Rúbrica 1: Proyecto de IAP (Informe de Sistematización)",
        criteria: [
          { name: "Diagnóstico Participativo", weight: 0.35, desc: "Involucra genuinamente a los actores comunitarios en la identificación de necesidades." },
          { name: "Ejecución del Plan de Acción", weight: 0.35, desc: "Implementa actividades transformadoras construidas horizontalmente con la comunidad." },
          { name: "Evaluación y Reflexión Crítica", weight: 0.30, desc: "Analiza cualitativamente los cambios logrados y el grado de empoderamiento colectivo." }
        ]
      },
      {
        title: "Rúbrica 2: Taller 'Diseñando un Diagnóstico Participativo'",
        criteria: [
          { name: "Diseño de Herramientas Diálogo", weight: 0.50, desc: "Estructura cartografías sociales, árboles de problemas o conversatorios inclusivos." },
          { name: "Facilitación y Mediación", weight: 0.50, desc: "Fomenta la escucha activa y la construcción colectiva de saberes." }
        ]
      },
      {
        title: "Rúbrica 3: Presentación de Resultados de IAP",
        criteria: [
          { name: "Apropiación Comunitaria", weight: 0.50, desc: "Sintetiza los hallazgos respetando la voz directa de los participantes." },
          { name: "Claridad y Calidez Comunicativa", weight: 0.50, desc: "Transmite los resultados mediante formatos accesibles y participativos." }
        ]
      }
    ]
  },
  7: {
    title: "Capítulo 7: Neurociencias de la Educación y Aprendizaje Consciente",
    rubrics: [
      {
        title: "Rúbrica 1: Diario de Reflexión 'Mi Cerebro Aprendiendo'",
        criteria: [
          { name: "Comprensión de Procesos Neurocognitivos", weight: 0.40, desc: "Explora cómo la atención, emoción y memoria influyen en su propio aprendizaje." },
          { name: "Desmitificación Neuroeducativa", weight: 0.30, desc: "Identifica y desmonta neuromitos comunes basándose en evidencia científica." },
          { name: "Autorregulación del Aprendizaje", weight: 0.30, desc: "Diseña pausas activas y rutinas que optimizan la funcionalidad cerebral." }
        ]
      },
      {
        title: "Rúbrica 2: Taller 'Diseñando una Clase Neuro-Consciente'",
        criteria: [
          { name: "Estructura Pedagógica Basada en Evidencia", weight: 0.40, desc: "Integra momentos de enganche emocional, procesamiento y consolidación." },
          { name: "Gestión del Clima de Aula", weight: 0.30, desc: "Promueve entornos seguros que reducen la amenaza y estimulan la curiosidad." },
          { name: "Diversidad y Neurodiversidad", weight: 0.30, desc: "Adapta la experiencia de aprendizaje para diferentes perfiles neurocognitivos." }
        ]
      },
      {
        title: "Rúbrica 3: Presentación 'Neuro-Píldoras'",
        criteria: [
          { name: "Divulgación Científica Accesible", weight: 0.50, desc: "Traduce conceptos neurocientíficos complejos a un lenguaje cotidiano y práctico." },
          { name: "Creatividad del Formato", weight: 0.50, desc: "Utiliza recursos visuales y narrativos dinámicos para captar la atención." }
        ]
      }
    ]
  },
  8: {
    title: "Capítulo 8: Pedagogía de la Trascendencia",
    rubrics: [
      {
        title: "Rúbrica 1: Diario 'Mi Mapa de Sentido de Vida'",
        criteria: [
          { name: "Autenticidad Existencial", weight: 0.40, desc: "Profundiza en las preguntas fundamentales sobre el propósito y la vocación de vida." },
          { name: "Coherencia de Valores", weight: 0.30, desc: "Articula sus metas personales con el impacto ético y social hacia los demás." },
          { name: "Integración de Experiencias", weight: 0.30, desc: "Transforma crisis o aprendizajes pasados en motores de crecimiento espiritual/humano." }
        ]
      },
      {
        title: "Rúbrica 2: Taller 'Visualizando mi Vocación'",
        criteria: [
          { name: "Representación Simbólica", weight: 0.50, desc: "Utiliza el esquema del Árbol de la Vocación para proyectar su desarrollo integral." },
          { name: "Profundidad en el Diálogo", weight: 0.50, desc: "Comparte y retroalimenta la vocación de sus pares desde una empatía profunda." }
        ]
      },
      {
        title: "Rúbrica 3: Ejercicio 'La Pausa Creativa'",
        criteria: [
          { name: "Práctica Contemplativa", weight: 0.50, desc: "Sostiene momentos de silencio y atención plena para clarificar sus estados internos." },
          { name: "Sintesis Creativa", weight: 0.50, desc: "Expresa las intuiciones surgidas durante la pausa mediante metáforas o escritos." }
        ]
      }
    ]
  },
  9: {
    title: "Capítulo 9: Diseño de Propuestas Educativas desde la Conciencia",
    rubrics: [
      {
        title: "Rúbrica 1: Diseño de una Propuesta Educativa Consciente",
        criteria: [
          { name: "Fundamentación Holística", weight: 0.35, desc: "Sustenta la propuesta en principios de conciencia, inclusión y pedagogía activa." },
          { name: "Coherencia Curricular", weight: 0.35, desc: "Alinea objetivos, metodologías reflexivas y evaluación formativa por rúbricas." },
          { name: "Factibilidad e Innovación", weight: 0.30, desc: "Aporta soluciones realistas y creativas a problemáticas del entorno educativo." }
        ]
      },
      {
        title: "Rúbrica 2: Autoevaluación 'Mi Proceso de Diseño'",
        criteria: [
          { name: "Conciencia Metacognitiva", weight: 0.50, desc: "Evalúa aciertos, bloqueos y evolución de su pensamiento pedagógico." },
          { name: "Receptividad al Feedback", weight: 0.50, desc: "Incorpora sugerencias de pares y docentes para enriquecer la propuesta." }
        ]
      },
      {
        title: "Rúbrica 3: Taller 'Comunidad de Práctica'",
        criteria: [
          { name: "Co-construcción de Aprendizajes", weight: 0.50, desc: "Aporta críticamente al perfeccionamiento de los proyectos de sus compañeros." },
          { name: "Liderazgo Colaborativo", weight: 0.50, desc: "Facilita ambientes de confianza y reflexión conjunta." }
        ]
      }
    ]
  },
  10: {
    title: "Capítulo 10: La Conciencia en el Siglo XXI: Tecnología, Familia y Economía",
    rubrics: [
      {
        title: "Rúbrica 1: Proyecto 'Análisis de mi Ecosistema Consciente'",
        criteria: [
          { name: "Análisis del Entorno Digital y Familiar", weight: 0.40, desc: "Evalúa el uso ético de la tecnología y la calidad de las relaciones interpersonales." },
          { name: "Educación Financiera Consciente", weight: 0.30, desc: "Cuestiona patrones de consumo y propone presupuestos sostenibles y éticos." },
          { name: "Plan de Sostenibilidad", weight: 0.30, desc: "Establece acciones para promover el bienestar digital, familiar y económico." }
        ]
      },
      {
        title: "Rúbrica 2: Taller 'Diseñando un Presupuesto Consciente'",
        criteria: [
          { name: "Alineación de Gastos con Valores", weight: 0.50, desc: "Clasifica egresos priorizando necesidades reales y proyectos con impacto positivo." },
          { name: "Viabilidad y Orden", weight: 0.50, desc: "Estructura metas financieras a corto, mediano y largo plazo con rigor." }
        ]
      },
      {
        title: "Rúbrica 3: Debate 'Tecnología, ¿Liberación o Control?'",
        criteria: [
          { name: "Pensamiento Crítico Tecnológico", weight: 0.50, desc: "Argumenta sobre el impacto de la IA, algoritmos y redes en la soberanía mental." },
          { name: "Soluciones Éticas", weight: 0.50, desc: "Propone normas de convivencia y desintoxicación digital para el aula y el hogar." }
        ]
      }
    ]
  },
  11: {
    title: "Capítulo 11: Ética y Conciencia: El Dilema del Profesional del Siglo XXI",
    rubrics: [
      {
        title: "Rúbrica 1: Análisis de Casos de Ética Profesional",
        criteria: [
          { name: "Rigurosidad en el Diagnóstico", weight: 0.50, desc: "Desglosa variables éticas, presiones institucionales y vacíos normativos en el caso." },
          { name: "Resolución Fundamentada", weight: 0.50, desc: "Propone alternativas donde prevalecen la integridad y la responsabilidad social." }
        ]
      },
      {
        title: "Rúbrica 2: Código de Ética Personal",
        criteria: [
          { name: "Consistencia Deontológica", weight: 0.50, desc: "Redacta sus principios no negociables como profesional del siglo XXI." },
          { name: "Compromiso de Acción", weight: 0.50, desc: "Define consecuencias y salvaguardas ante intentos de corrupción o falta de ética." }
        ]
      }
    ]
  },
  12: {
    title: "Capítulo 12: El Futuro de la Ética Profesional y la Conciencia en la Era Digital",
    rubrics: [
      {
        title: "Rúbrica 1: Análisis de Casos en la Era Digital",
        criteria: [
          { name: "Evaluación de Riesgos Algorítmicos", weight: 0.50, desc: "Identifica sesgos en IA, privacidad de datos y dilemas de automatización." },
          { name: "Gobierno Ético Digital", weight: 0.50, desc: "Propone salvaguardas humanas en entornos altamente tecnologizados." }
        ]
      },
      {
        title: "Rúbrica 2: Hoja de Ruta de Propósito Profesional",
        criteria: [
          { name: "Proyección Futura", weight: 0.50, desc: "Anticipa escenarios cambiantes y adapta sus competencias con sentido humanista." },
          { name: "Visión de Sostenibilidad", weight: 0.50, desc: "Integra la responsabilidad ambiental y social en su ejercicio profesional futuro." }
        ]
      }
    ]
  },
  13: {
    title: "Capítulo 13: Herramientas y Guías Prácticas para el Desarrollo de la Conciencia Profesional",
    rubrics: [
      {
        title: "Rúbrica 1: Resolución de Dilemas Éticos (Estrategia de Luban)",
        criteria: [
          { name: "Secuencia Metodológica", weight: 0.50, desc: "Aplica sistemáticamente los pasos para ponderar deberes morales y legales." },
          { name: "Toma de Decisión Crítica", weight: 0.50, desc: "Argumenta la postura final equilibrando rectitud moral y practicidad." }
        ]
      },
      {
        title: "Rúbrica 2: Protocolo de Integridad",
        criteria: [
          { name: "Claridad en Procedimientos", weight: 0.50, desc: "Estructura pasos concretos para prevenir, detectar y corregir faltas a la integridad." },
          { name: "Cultura de Transparencia", weight: 0.50, desc: "Fomenta la rendición de cuentas y la comunicación abierta en las organizaciones." }
        ]
      }
    ]
  },
  14: {
    title: "Capítulo 14: El Legado de la Conciencia Profesional en la Era Digital",
    rubrics: [
      {
        title: "Rúbrica 1: Manifiesto de Legado Profesional",
        criteria: [
          { name: "Trascendencia y Visión", weight: 0.50, desc: "Plasma la huella e impacto social positivo que aspira a dejar en su comunidad." },
          { name: "Fuerza Inspiradora", weight: 0.50, desc: "Redacta un texto emotivo, firme y profundamente humano sobre el rol profesional." }
        ]
      },
      {
        title: "Rúbrica 2: Debate sobre 'El Futuro de la IA'",
        criteria: [
          { name: "Postura Humanista Centrada en el Ser", weight: 0.50, desc: "Defiende la primacía de la conciencia y la empatía humana sobre la máquina." },
          { name: "Calidad Dialéctica", weight: 0.50, desc: "Utiliza refutaciones fundamentadas respetando el ritmo y la diversidad de ideas." }
        ]
      }
    ]
  },
  15: {
    title: "Capítulo 15: El Llamado a la Acción y el Legado de la Integridad",
    rubrics: [
      {
        title: "Rúbrica 1: Manifiesto de Integridad Profesional",
        criteria: [
          { name: "Compromiso Comunitario", weight: 0.50, desc: "Asume responsabilidades con el bien común y la equidad en su entorno profesional." },
          { name: "Llamado Mobilizador", weight: 0.50, desc: "Invita a pares y organizaciones a sumarse a redes de práctica ética activa." }
        ]
      },
      {
        title: "Rúbrica 2: Análisis de Impacto (Del Caso Individual al Colectivo)",
        criteria: [
          { name: "Visión Sistémica", weight: 0.50, desc: "Muestra cómo acciones individuales éticas desencadenan transformaciones sociales." },
          { name: "Medición de Cambio", weight: 0.50, desc: "Propone indicadores cualitativos para evaluar el impacto de la conciencia activa." }
        ]
      }
    ]
  },
  16: {
    title: "Capítulo 16: Conclusión: La Conciencia Activa como Sello Distintivo del Profesional del Futuro",
    rubrics: [
      {
        title: "Rúbrica 1: Ensayo / Video sobre el Legado",
        criteria: [
          { name: "Síntesis Transformadora", weight: 0.50, desc: "Integra los saberes de todo el libro en una postura holística sobre el Ser y Saber." },
          { name: "Dominio Comunicativo y Pasión", weight: 0.50, desc: "Comunica con convicción, elocuencia y profundidad el mensaje de conciencia." }
        ]
      },
      {
        title: "Rúbrica 2: Mesa Redonda (La Ética y los ODS)",
        criteria: [
          { name: "Alineación Global", weight: 0.50, desc: "Conecta la ética profesional y la conciencia con los Objetivos de Desarrollo Sostenible." },
          { name: "Aportes Sustantivos", weight: 0.50, desc: "Enriquece la discusión proponiendo soluciones globales desde realidades locales." }
        ]
      }
    ]
  }
};