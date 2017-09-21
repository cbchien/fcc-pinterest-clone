import { User } from '../user/user.model';
import { Image } from '../image/image.model';

export const testUser: User = {
  name: 'Dummy 123',
  picture: 'dummypic.jpg',
  twitterID: 'twitterDummy',
  /* tslint:disable-next-line */
  _id: '58fdf278abe27f2a035c3d54',
};

export const testImage: Image = {
  likers: [testUser._id],
  url: 'https://some/url',
  owner: testUser._id,
};