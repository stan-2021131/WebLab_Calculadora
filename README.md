# Calculadora Simple - WebLab

Calculadora simple desarrollada con React, TypeScript y Vite, utilizando Bun como package manager.

## Características

- ✅ Operaciones: suma, resta, multiplicación, división y módulo
- ✅ Soporte para punto decimal
- ✅ Límite de 9 caracteres en el display
- ✅ Validación de errores (números negativos y mayores a 999999999)
- ✅ Diseño retro con estilo vintage
- ✅ Custom hook para manejo de lógica (`useCalculator`)
- ✅ Componentes menores a 20 líneas
- ✅ TypeScript
- ✅ Favicon y título personalizados
- ✅ Manejo de división por cero

## Tecnologías

- **React 19** - Librería de UI
- **TypeScript 6** - Tipado estático
- **Vite 8** - Build tool
- **Bun** - Package manager y runtime
- **Vitest** - Testing framework
- **Storybook** - Documentación de componentes
- **ESLint** - Linting

## Instalación

```bash
# Instalar dependencias
bun install

# Modo desarrollo
bun run dev

# Build para producción
bun run build

# Preview del build
bun run preview
```

## Scripts Disponibles

```bash
bun run dev          # Servidor de desarrollo
bun run build        # Build de producción
bun run lint         # Verificar código con ESLint
bun run test         # Ejecutar tests
bun run test:watch   # Tests en modo watch
bun run storybook    # Iniciar Storybook
```

## Estructura del Proyecto

```
src/
├── components/      # Componentes React
├── hooks/          # Custom hooks
├── styles/         # Archivos CSS
├── types/          # Definiciones TypeScript
├── utils/          # Funciones utilitarias
└── stories/        # Historias de Storybook
```

## Calidad del Código

- Testing con Vitest
- Documentación de componentes con Storybook
- ESLint configurado con reglas personalizadas
- Componentes desacoplados
- Lógica encapsulada en custom hooks

## Reglas de Linting

- ❌ Prohibidos los puntos y coma
- ⚠️ Máximo 120 caracteres por línea
- ✅ JavaScript Standard Style

## Testing

Los tests están configurados con Vitest y pueden ejecutarse con:

```bash
bun test
```

## Storybook

Para ver la documentación de componentes:

```bash
bun run storybook
```
