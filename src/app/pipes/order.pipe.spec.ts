
import { OrderPipe } from './order.pipe';

describe('Pipe: Order', () => {
  let pipe: OrderPipe;
  let blogData: Array<Object>, 
    commentData: Array<Object>,
    orderedPosts: Array<Object>,
    orderedComments: Array<Object>;

  beforeEach(() => {
    pipe = new OrderPipe;
    orderedPosts = [
      { title: 'Post 3', publish_date: '2018-03-07' },
      { title: 'Post 2', publish_date: '2017-03-28' },
      { title: 'Post 1', publish_date: '2016-03-16' },
    ];
    orderedComments = [
      { user: 'Nicholas', date: '2018-02-02' },
      { user: 'John', date: '2017-05-17' },
      { user: 'Cindy', date: '2016-03-08' },
    ];
  });

  it('returns posts in ascending date order', () => {
    blogData = [
      { title: 'Post 1', publish_date: '2016-03-16' },
      { title: 'Post 2', publish_date: '2017-03-28' },
      { title: 'Post 3', publish_date: '2018-03-07' },
    ];
    expect(pipe.transform(blogData)).toEqual(orderedPosts);
  });
  it('returns comments in ascending date order', () => {
    commentData = [
      { user: 'Cindy', date: '2016-03-08' },
      { user: 'John', date: '2017-05-17' },
      { user: 'Nicholas', date: '2018-02-02' },
    ];
    expect(pipe.transform(commentData)).toEqual(orderedComments);
  })
});