# Testing Checklist - Post-Feature Development

This checklist must be completed after adding any new features, pages, or making significant changes to the codebase.

## Build & Compilation Testing

### 1. Run Build Process
```bash
npm run build
```
- **Must pass without errors** - Fix all TypeScript and ESLint errors
- Address all linting warnings before proceeding
- Ensure all imports resolve correctly after file moves
- Fix any quote escaping issues (`&apos;`, `&quot;`)

### 2. Start Development Server
```bash
npm run dev --turbopack
```
- Server must start without errors on http://localhost:3000
- Check console for any runtime warnings or errors

## Page Testing

### 3. Test All Routes Manually
Visit each page and verify:
- **Page loads without errors**
- **Layout renders correctly** (Header, Footer, scroll behavior)
- **Responsive design works** (mobile, tablet, desktop)
- **Interactive elements function** (buttons, forms, animations)
- **Content displays properly** (no missing text, broken formatting)

**Current Routes to Test:**
- `/` - Homepage (interactive choose-your-own-adventure)
- `/info/pricing` - Pricing page
- `/info/automated/website/testing/testing-websites-without-playwright-selenium-headless-expensive-brittle-tests` - SEO page

### 4. Test Navigation
- **Header navigation** works from all pages
- **Footer links** function correctly
- **Demo buttons** open modals properly
- **Back buttons** and path switching work on homepage

## Sitemap Validation

### 5. Check Sitemap Generation
```bash
# Visit sitemap in browser
curl http://localhost:3000/sitemap.xml
# Or visit: http://localhost:3000/sitemap.xml
```

### 6. Verify Sitemap Contents
Ensure sitemap includes:
- **All public pages** that should be indexed
- **Correct URLs** matching actual routes
- **Proper priority values** (homepage highest, info pages appropriate levels)
- **Valid lastModified dates**
- **No 404 or broken routes**

### 7. Cross-Reference Routes vs Sitemap
- **Every route** in the app should be in sitemap (unless intentionally excluded)
- **Every sitemap URL** should be a valid, working route
- **No missing pages** - check for pages added but not included in sitemap

## SEO & Metadata Testing

### 8. Verify Page Metadata
For each page check:
- **Title tags** are unique and descriptive
- **Meta descriptions** are present and compelling
- **Open Graph tags** work correctly
- **No duplicate titles** across pages

### 9. Test SEO Elements
- **Proper heading hierarchy** (h1, h2, h3)
- **Alt text** on images
- **Semantic HTML structure**
- **Schema markup** if applicable

## Performance & Browser Testing

### 10. Cross-Browser Testing
Test in:
- **Chrome** (primary browser)
- **Firefox** 
- **Safari** (if possible)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

### 11. Performance Check
- **Page load times** reasonable
- **No console errors** in any browser
- **Smooth scrolling** and animations
- **No broken images** or missing assets

## Form & Interactive Testing

### 12. Test All Interactive Elements
- **Demo modal** opens and closes properly
- **Contact forms** submit correctly
- **Button hover states** work
- **Scroll snap behavior** functions properly
- **Choice buttons** on homepage respond correctly

### 13. Error State Testing
- **Test with JavaScript disabled** (basic functionality should work)
- **Test with slow network** (check loading states)
- **Test invalid form inputs** (proper validation messages)

## Final Deployment Checks

### 14. Environment Variables
- **All required environment variables** are documented
- **API keys and secrets** are properly configured
- **POSTMARK_SERVER_TOKEN** for email functionality
- **NEXT_PUBLIC_BASE_URL** for sitemap generation (falls back to https://whytylt.com)

### 15. Analytics & Tracking
- **Google Analytics** loads correctly
- **Event tracking** functions as expected
- **No tracking errors** in console

## Documentation Updates

### 16. Update Documentation
After adding new pages:
- **Update CLAUDE.md** with new route information
- **Update this checklist** if new testing scenarios are needed
- **Update ARCHITECTURE_RULES.md** if new patterns are established

## Sign-Off Checklist

Before considering a feature complete:

- [ ] Build passes without errors
- [ ] All pages load and function correctly
- [ ] Sitemap includes all new pages
- [ ] Cross-browser testing completed
- [ ] Mobile responsive design verified
- [ ] SEO metadata properly configured
- [ ] Interactive elements tested
- [ ] Performance is acceptable
- [ ] Documentation updated

**Only mark feature as complete when ALL items are checked.**

## Emergency Rollback

If critical issues are discovered:
1. **Immediately revert** problematic changes
2. **Test rollback** with this same checklist
3. **Document issues** for future reference
4. **Plan proper fix** before re-attempting

Remember: A broken production site is worse than a delayed feature. Always complete this checklist thoroughly.