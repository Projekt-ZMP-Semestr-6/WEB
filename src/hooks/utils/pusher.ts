import Pusher, { Channel } from 'pusher-js';
import createNotification from './createNotification';

function bindEvent(channel: Channel) {
  channel.bind('price.changed', (data) => {
    createNotification(data.content);
  });
}

class AppPusher {
  private static instance: Pusher;

  public static getInstance() {
    if (!AppPusher.instance) {
      AppPusher.instance = new Pusher(process.env.REACT_APP_PUSHER_KEY as string, {
        cluster: process.env.REACT_APP_PUSHER_CLUSTER
      });

      return AppPusher.instance;
    }
  }

  public static initGames(appIds: number[]) {
    appIds.forEach((appId) => {
      const channel = this.instance.subscribe(`price.notify.${appId}`);
      bindEvent(channel);
    });
  }

  public static bindGame(appId: string) {
    const channel = this.instance.subscribe(`price.notify.${appId}`);
    bindEvent(channel);
  }

  public static unbindGame(appId: string) {
    this.instance.unsubscribe(`price.notify.${appId}`);
  }
}

export default AppPusher;
