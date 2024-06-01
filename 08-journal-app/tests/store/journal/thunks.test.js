import { beforeEach, describe, test, vitest } from 'vitest';
import { startNewNote } from '../../../src/store/journal';

describe('Pruebas en journal thunks', () => {
  const dispatch = vitest.fn();
  const getState = vitest.fn();
  beforeEach(() => vitest.clearAllMocks());

  test('startNewNote debe de crear una nueva nota vacia', async () => {
    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid } });
    await startNewNote()(dispatch, getState);
  });
});
