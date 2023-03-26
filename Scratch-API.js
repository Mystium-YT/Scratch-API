class ScratchAPIExt {
  getInfo() {
    return {
      id: 'scratchapiext',
      name: 'Scratch API',
      blocks: [{
          opcode: 'gettitle',
          text: 'get title of scratch project [ID]',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 750275219 } }
        }]
    };
  }
  gettitle (args) {
    data = fetch('https://trampoline.turbowarp.org/proxy/projects/' + args.URL)
    return data.title;
      .then((response) => {
        return response.text();
      })
      .catch((error) => {
        console.error(error);
        return 'Uh oh! Something went wrong.';
      });
  }
}
Scratch.extensions.register(new ScratchAPIExt());
