import {ipcRenderer} from 'electron'

export default class MyService {
    func() {
        ipcRenderer.send("fromWebToNative");
    }
}