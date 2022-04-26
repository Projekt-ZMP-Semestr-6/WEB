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
