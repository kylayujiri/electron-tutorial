// renderer processes run web pages and do not run Node.js by default (unlike main.js)

const information = document.getElementById('info');

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out pong
};

func();
