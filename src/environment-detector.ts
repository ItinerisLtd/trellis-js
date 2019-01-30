import * as fs from 'fs'

export class EnvironmentDetector {
  /**
   * Absolute path to Trellis directory.
   */
  trellisDir: string

  /**
   * @param trellisDir Absolute path to Trellis directory.
   */
  constructor(trellisDir: string) {
    this.trellisDir = trellisDir
  }

  detect() {
    return fs.readdirSync(`${this.trellisDir}/hosts`)
  }
}
