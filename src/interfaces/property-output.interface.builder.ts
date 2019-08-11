import { IPropertyOutput } from "./property-output.interface";

export class PropertyOutputBuilder {
  private definitions: string[] = []
  private externalSetters: string[] = []
  private localSetters: string[] = []

  public build(): IPropertyOutput {
    return {
      definitions: this.definitions,
      externalSetters: this.externalSetters,
      localSetters: this.localSetters
    }
  }

  public withDefinitions(value: string[]) {
    this.definitions = value
    return this
  }

  public withExternalSetters(value: string[]) {
    this.externalSetters = value
    return this
  }

  public withLocalSetters(value: string[]) {
    this.localSetters = value
    return this
  }
}
