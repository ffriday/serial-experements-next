/**
 * Wire shape for media attached to catalog entities, banners, cards, etc.
 * `name` is the storage/CDN id; `mediatype` is the MIME type from the API.
 */
export type MediaAsset = {
  name: string;
  mediatype: string;
};
