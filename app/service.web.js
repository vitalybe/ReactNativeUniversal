import {ipcRenderer} from 'electron'

export default class MyService {
  func() {
    alert("I am web!")

    ipcRenderer.send("fromWebToNative");
  }
}