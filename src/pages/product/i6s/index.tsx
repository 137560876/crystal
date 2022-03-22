import ReleasePage from '../component/default-page';

const I6sRelease = () => {
  return (
    <ReleasePage
      version="5.1.30"
      iosAddress="itms-services://?action=download-manifest&url=https://www.qxy.world:9999/resource/i6s.plist"
      androidAddress="http://192.168.8.68:8080/ngapp/android/dev/5.1.30.0/i6s.apk"
    />
  );
};

export default I6sRelease;
