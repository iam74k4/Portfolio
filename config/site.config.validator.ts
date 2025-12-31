/**
 * Site configuration validation
 *
 * Validates configuration during build
 */

import {
  siteConfig,
  skillsConfig,
  experiencesConfig,
  certificationsConfig,
  projectsConfig,
  blogPostsConfig,
} from './site.config';
import { isValidUrl, isValidEmail, isValidSkillLevel } from './site.config.types';

export class ConfigValidationError extends Error {
  constructor(message: string) {
    super(`[Config Validation Error] ${message}`);
    this.name = 'ConfigValidationError';
  }
}

/**
 * Validate site configuration
 */
export function validateSiteConfig() {
  const errors: string[] = [];

  // Check required fields
  if (!siteConfig.name || siteConfig.name === 'Your Name') {
    errors.push('name is not set. Please configure it in config/site.config.ts');
  }

  if (!siteConfig.email || siteConfig.email === 'your.email@example.com') {
    errors.push('email is not set. Please configure it in config/site.config.ts');
  } else if (!isValidEmail(siteConfig.email)) {
    errors.push(`Invalid email format: ${siteConfig.email}`);
  }

  if (!siteConfig.url || siteConfig.url === 'https://yourdomain.com') {
    errors.push('url is not set. Please configure it in config/site.config.ts');
  } else if (!isValidUrl(siteConfig.url)) {
    errors.push(`Invalid url format: ${siteConfig.url}`);
  }

  // Check social links
  if (!siteConfig.social.github || siteConfig.social.github === 'https://github.com/yourusername') {
    errors.push('GitHub URL is not set. Please configure it in config/site.config.ts');
  } else if (!isValidUrl(siteConfig.social.github)) {
    errors.push(`Invalid GitHub URL format: ${siteConfig.social.github}`);
  }

  // Check skill levels
  skillsConfig.forEach((category) => {
    category.items.forEach((skill) => {
      if (!isValidSkillLevel(skill.level)) {
        errors.push(
          `Invalid skill level for "${skill.name}" (must be between 0-100): ${skill.level}`
        );
      }
    });
  });

  // Check projects
  projectsConfig.forEach((project) => {
    if (project.github && !isValidUrl(project.github)) {
      errors.push(`Invalid GitHub URL for project "${project.title}": ${project.github}`);
    }
    if (project.demo && !isValidUrl(project.demo)) {
      errors.push(`Invalid demo URL for project "${project.title}": ${project.demo}`);
    }
  });

  return errors;
}

/**
 * Check for warnings (non-blocking recommendations)
 */
export function getConfigWarnings() {
  const warnings: string[] = [];

  // Check if skills are configured
  if (skillsConfig.length === 0) {
    warnings.push('No skills are configured.');
  }

  // Check if projects are configured
  if (projectsConfig.length === 0) {
    warnings.push('No projects are configured.');
  }

  // Check if work experience is configured
  const workExperiences = experiencesConfig.filter((e) => e.type === 'work');
  if (workExperiences.length === 0) {
    warnings.push('No work experience is configured.');
  }

  return warnings;
}

/**
 * Complete configuration validation (for development use)
 */
export function validateConfig() {
  const errors = validateSiteConfig();
  const warnings = getConfigWarnings();

  if (errors.length > 0) {
    console.error('\n🚨 Configuration errors found:\n');
    errors.forEach((error, index) => {
      console.error(`  ${index + 1}. ${error}`);
    });
    console.error('\n');
    throw new ConfigValidationError(`Found ${errors.length} configuration error(s).`);
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  Configuration recommendations:\n');
    warnings.forEach((warning, index) => {
      console.warn(`  ${index + 1}. ${warning}`);
    });
    console.warn('\n');
  }

  console.log('✅ Configuration validation completed.\n');
}

// Run only in development environment
if (process.env.NODE_ENV === 'development') {
  try {
    validateConfig();
  } catch (error) {
    // Display errors in development but continue build
    console.error(error);
  }
}

