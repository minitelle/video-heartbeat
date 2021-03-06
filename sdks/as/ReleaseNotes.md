Release Notes for Flash/AS3 VideoHeartbeat SDK
===============================================


Included are notes from the latest major revision to current.

## 1.4.0.1 (23 Oct, 2014)

Fixed issues
- while in ERROR state, the output HTTP calls issued by the VHL are suppressed.

## 1.4.0.0 (10 Sep, 2014)

_NOTE_: 1.4.0.0 breaks backward compatibility.

New features
- TV PSDK customers can now activate Primetime Player Monitoring independently of Adobe Analytics.
- ad tracking has been optimized by removing the trackAdBreakStart and trackAdBreakComplete methods. The ad break is inferred from the trackAdStart and trackAdComplete method calls.
- the “playhead” property is no longer needed when tracking ads.

## 1.3.1.1 (15 July, 2014)

Fixed issues
- the custom visitor id is now mapped on the s:user:id.

## 1.3.1.0 (14 July, 2014)
 
New features
- enhanced the PlayerDelegate interface to support graceful termination of the VideoHeartbeat library
- deprecated the trackAdBreakStart and trackAdBreakComplete methods.
- introduced the "API level" as part of the library's versioning system.
- implemented data sanitization for the information obtained via the player delegate interface.
 
Fixed issues
- the library now supports multiple active instances at the same time.
- trackComplete() will issue the COMPLETE event on the network while trackVideoUnload() will issue the UNLOAD event on the network.

## 1.3.0 (22 Apr, 2014)

New features
- Chapter tracking APIs are now available.
- API change: the AdBreakInfo now has an additional property called "startTime". This change is backwards-compatible with API v1.2.

Fixed issues:
- Heartbeat calls are now being sent during the buffering periods.
- COMPLETE event is no longer sent for the initial video asset when another video asset is loaded
- COMPLETE event is no longer sent for an ad when seeking outside that particular ad.

## 1.2.0 (17 Apr, 2014)

New features
- New API changes
- Eliminate the dependency on AppMeasurement's Media Module
- Support for Marketing Cloud Visitor ID

Fixed issues
- Tracking is not enabled when the user plays a video in a new browser instance
- Only the first AD is tracked during playback
- Video length must be an integer
- Total duration parameter wasn’t being reset when playing the same ad
- Post-roll ad breaks not associated with the appropriate video

Known limitations
- No heartbeats are sent during buffering events although time spent calculation does not include buffering time
- When seeking outside the ad content, the COMPLETE event is sent for that particular ad
- COMPLETE event is sent into Adobe Analytics for the initial video asset when another video asset is loaded

## 1.1.0 (20 Feb, 2014)
- updated the public API to maintain consistency with the other implementations

## 1.0.0 (20 Nov, 2013)
- Initial release to production of version 1.0
