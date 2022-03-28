import ReleasePage from '../component/default-page';

const D6cRelease = () => {
  return (
    <ReleasePage
      version="5.1.30"
      iosAddress="itms-services://?action=download-manifest&url=https://www.qxy.world:9999/resource/d6c.plist"
      androidAddress="http://192.168.8.68:8080/ngapp/android/dev/5.1.30.0/D6c.apk"
    />
  );
};

export default D6cRelease;
