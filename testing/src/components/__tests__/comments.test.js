import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';


it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
} );

it('handles actions with unknown type', () => {
    const action = {
        type: test,
        payload: 'test'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
});