#!/usr/bin/env bash
# Rebuild the homepage placeholder from the original portrait previews.
# Set FFMPEG to an alternate ffmpeg binary if it is not on PATH.
set -euo pipefail
cd "$(dirname "$0")/.."
FFMPEG=${FFMPEG:-ffmpeg}
work=$(mktemp -d "${TMPDIR:-/tmp}/viper-home-reel.XXXXXX")
trap 'rm -rf "$work"' EXIT
mkdir -p "$work/wide" "$work/portrait" media/home

# Source, start, duration, and vertical offset for the 16:9 crop.
clips=(
  'sistek 8.00 1.10 600'
  'kelland-v2 0.15 1.20 500'
  'sistek 5.15 1.10 440'
  'cale-aera 10.50 1.15 400'
  'singhara-v2 7.80 1.10 220'
  'maribou-state 2.00 1.00 450'
  'chris-alexander 5.00 1.00 180'
  'kelland-v2 1.00 1.15 250'
  'cale-aera 7.00 1.10 420'
  'chris-alexander 10.25 1.00 180'
  'maribou-state 7.00 1.10 420'
  'singhara-v2 15.90 1.15 360'
)
for variant in wide portrait; do
  : > "$work/$variant/list.txt"
  for i in "${!clips[@]}"; do
    read -r name start duration crop_y <<< "${clips[$i]}"
    n=$(printf '%02d' "$i")
    if [ "$variant" = wide ]; then
      filter="crop=1080:608:0:$crop_y,scale=1280:720:flags=lanczos,setsar=1,fps=30"
    else
      filter='scale=720:1254:flags=lanczos,setsar=1,fps=30'
    fi
    "$FFMPEG" -hide_banner -loglevel error -ss "$start" -i "media/video-previews/$name.mp4" -t "$duration" \
      -vf "$filter" -an -c:v libx264 -preset fast -crf 21 -pix_fmt yuv420p \
      -threads 2 -g 60 -sc_threshold 0 -y "$work/$variant/$n.mp4"
    echo "file '$n.mp4'" >> "$work/$variant/list.txt"
  done
  "$FFMPEG" -hide_banner -loglevel error -f concat -safe 0 -i "$work/$variant/list.txt" \
    -c copy -movflags +faststart -y "media/home/home-reel-$variant.mp4"
  "$FFMPEG" -hide_banner -loglevel error -i "media/home/home-reel-$variant.mp4" \
    -frames:v 1 -q:v 2 -y "media/home/home-reel-$variant-poster.jpg"
done
