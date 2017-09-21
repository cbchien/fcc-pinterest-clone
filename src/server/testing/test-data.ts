import { User } from '../user/user.model';
import { Image } from '../image/image.model';

export const testUser: User = {
  twitterID: 'twitterDummy',
  name: 'Dummy 123',
  picture: 'dummypic.jpg',
  _id: '58fdf278abe27f2a035c3d54',
};

export const testImage: Image = {
  url: 'https://some/url',
  owner: testUser._id,
  likers: [testUser._id],
};