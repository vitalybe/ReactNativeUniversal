import {ipcRenderer} from 'electron'

export default class MyService {
  func() {
    alert("I am electron!")

    ipcRenderer.send("fromWebToNative");
  }
}