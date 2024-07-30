foreach ($img in Get-ChildItem *.png) {
	Echo $img
	cwebp -q 80 $img -o ($img.Basename + ".webp")
}
