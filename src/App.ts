import { EventEmitter } from "eventEmitter/mod.ts";

type AppEvents = {
  init: [],
  message: [string],
  err: [string],
  render: []
};

export class App extends EventEmitter<AppEvents> {
  private readonly decoder: TextDecoder;
  private readonly encoder: TextEncoder;

  private canWrite: boolean;

  constructor({
    decoder = new TextDecoder("utf-8"),
    encoder = new TextEncoder(),
    canWrite = false,
  }) {
    super();

    this.decoder = decoder ?? new TextDecoder("utf-8");
    this.encoder = encoder ?? new TextEncoder();
    this.canWrite = canWrite;
  }

  public async start () {
    await this.emit("init");

    (async () => {
      for await (const line of Deno.stdin.readable) {
        const msg = this.decoder.decode(line);
        this.emit("message", msg);
      }
    })()
    
    console.log("Test")
  }
}
