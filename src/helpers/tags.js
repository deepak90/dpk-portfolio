import { compose } from 'ramda';

const allTags = data => {
    return data.reduce((acc, cur) => {
        return acc.concat(cur.tags);
    }, []);
};

const removeDuplicatesInArray = data => {
    return [...new Set(data)];
};

export const retrieveAllUniqueTags = compose(
    removeDuplicatesInArray,
    allTags
);
