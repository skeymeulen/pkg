/// <reference types="node" />
declare function patchMachOExecutable(file: Buffer): Buffer;
declare function signMachOExecutable(executable: string): void;
export { patchMachOExecutable, signMachOExecutable };
//# sourceMappingURL=mach-o.d.ts.map