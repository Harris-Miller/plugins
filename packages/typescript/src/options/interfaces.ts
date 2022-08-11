import type { CompilerOptions } from 'typescript';

import { PartialCompilerOptions, TranspilerModes } from '../../types';

export { EnumCompilerOptions, JsonCompilerOptions } from '../../types';
export { PartialCompilerOptions };

/** Typescript compiler options */
export type { CompilerOptions } from 'typescript';

export const DEFAULT_COMPILER_OPTIONS: PartialCompilerOptions = {
  module: 'esnext',
  skipLibCheck: true
};

export const FORCED_COMPILER_OPTIONS: Partial<CompilerOptions> = {
  // Always use tslib
  noEmitHelpers: true,
  importHelpers: true,
  // Preventing Typescript from resolving code may break compilation
  noResolve: false
};

export const compilerOptionsSetByMode = (
  transpilerMode: TranspilerModes
): Partial<CompilerOptions> => {
  return {
    declaration: transpilerMode === 'full' || transpilerMode === 'declarationOnly',
    emitDeclarationOnly: transpilerMode === 'declarationOnly',
    noEmit: transpilerMode === 'none'
  };
};
