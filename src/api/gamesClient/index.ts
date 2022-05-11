import { gameClient } from './config';

export function getFreeGames() {
  return gameClient.get('/freebies');
}

export function getGameById(gameId: string) {
  return gameClient.get(`/game/${gameId}`);
}

export function searchGameByName(gameName: string) {
  return gameClient.get(`/search/${gameName}`);
}

export function attachGame(appId: string) {
  return gameClient.get(`/attach/${appId}`);
}

export function detachGame(appId: string) {
  return gameClient.get(`/detach/${appId}`);
}

export function bestsellers() {
  return gameClient.get(`/bestsellers`);
}

export function testPriceChange() {
  return gameClient.get(`/fire/1`);
}
