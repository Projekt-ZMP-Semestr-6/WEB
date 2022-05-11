import Pusher, { Channel } from 'pusher-js';
import createNotification from './createNotification';

function bindEvent(channel: Channel) {
  channel.bind('price.changed', (data) => {
    createNotification(data.content);
  });
}

class AppPusher {
  private static instance: Pusher;

  private constructor() {}

  public static getInstance() {
    if (!AppPusher.instance) {
      AppPusher.instance = new Pusher('2c7bd4804e490cb6e09c', {
        cluster: 'eu'
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
