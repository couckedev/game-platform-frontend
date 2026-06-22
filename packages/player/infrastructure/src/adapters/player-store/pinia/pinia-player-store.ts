import type { PlayerAuthenticationReadModel } from '@player/application';
import { defineStore, type Pinia } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = (piniaInstance: Pinia) =>
  defineStore('player', () => {
    const playerAuthentication = ref<PlayerAuthenticationReadModel>({
      status: 'UNKNOWN',
      currentPlayer: null,
    });

    function setPlayerAuthentication(
      readModel: PlayerAuthenticationReadModel,
    ): void {
      playerAuthentication.value = readModel;
    }

    return { playerAuthentication, setPlayerAuthentication };
  })(piniaInstance);
