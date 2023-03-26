class ScratchAPI-Ext {
  getInfo() {
    return {
      id: 'asyncexample',
      name: 'Async Blocks',
      blocks: [
        {
          opcode: 'wait',
          text: 'wait [TIME] seconds',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'gettitle',
          text: 'get title of scratch project [ID]',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 750275219
            }
          }
        }
      ]
    };
  }

  wait (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000;
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }

  gettitle (args) {
    return fetch('https://trampoline.turbowarp.org/proxy/projects/' + args.URL).title
      .then((response) => {
        return response.text();
      })
      .catch((error) => {
        console.error(error);
        return 'Uh oh! Something went wrong.';
      });
  }
}
Scratch.extensions.register(new ScratchAPI-Ext());
