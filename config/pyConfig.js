module.exports = {
    mode: 'text',
    /*eslint-disable-next-line*/
    // Just for RPI3 comment pythonPath key
    //pythonPath: "C:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python36_64\\python.exe",
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './src/scripts/python',
    args: ["hello world"]
};