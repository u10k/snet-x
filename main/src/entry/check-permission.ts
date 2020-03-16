import { sudoRun } from '../shared/shell/sudo-run';
import { instance } from './instance';

async function checkPermissionIsInvalid() {
  const { snet } = instance;
  try {
    // 检查是否有 sudo 权限
    await sudoRun.checkSudo();

    // 检查 snet 程序
    await snet.checkSnetBin();

    // tray 设置
    snet.tray.setPermission(true);
    return false;
  } catch (e) {
    snet.tray.setPermission(false);

    return e;
  }
}

export { checkPermissionIsInvalid };
