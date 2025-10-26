/**
 * サイト設定のバリデーション
 *
 * ビルド時に設定の妥当性をチェック
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
 * サイト設定の検証
 */
export function validateSiteConfig() {
  const errors: string[] = [];

  // 必須フィールドのチェック
  if (!siteConfig.name || siteConfig.name === 'Your Name') {
    errors.push('name が未設定です。config/site.config.ts で設定してください。');
  }

  if (!siteConfig.email || siteConfig.email === 'your.email@example.com') {
    errors.push('email が未設定です。config/site.config.ts で設定してください。');
  } else if (!isValidEmail(siteConfig.email)) {
    errors.push(`email の形式が不正です: ${siteConfig.email}`);
  }

  if (!siteConfig.url || siteConfig.url === 'https://yourdomain.com') {
    errors.push('url が未設定です。config/site.config.ts で設定してください。');
  } else if (!isValidUrl(siteConfig.url)) {
    errors.push(`url の形式が不正です: ${siteConfig.url}`);
  }

  // SNSリンクのチェック
  if (!siteConfig.social.github || siteConfig.social.github === 'https://github.com/yourusername') {
    errors.push('GitHub URL が未設定です。config/site.config.ts で設定してください。');
  } else if (!isValidUrl(siteConfig.social.github)) {
    errors.push(`GitHub URL の形式が不正です: ${siteConfig.social.github}`);
  }

  // スキルレベルのチェック
  skillsConfig.forEach((category) => {
    category.items.forEach((skill) => {
      if (!isValidSkillLevel(skill.level)) {
        errors.push(
          `スキル「${skill.name}」のレベルが不正です（0-100の範囲で設定してください）: ${skill.level}`
        );
      }
    });
  });

  // プロジェクトのチェック
  projectsConfig.forEach((project) => {
    if (project.github && !isValidUrl(project.github)) {
      errors.push(`プロジェクト「${project.title}」のGitHub URLが不正です: ${project.github}`);
    }
    if (project.demo && !isValidUrl(project.demo)) {
      errors.push(`プロジェクト「${project.title}」のデモURLが不正です: ${project.demo}`);
    }
  });

  return errors;
}

/**
 * 警告レベルのチェック（ビルドは通すが推奨事項を表示）
 */
export function getConfigWarnings() {
  const warnings: string[] = [];

  // スキルが少ない場合
  if (skillsConfig.length === 0) {
    warnings.push('スキルが1つも設定されていません。');
  }

  // プロジェクトが少ない場合
  if (projectsConfig.length === 0) {
    warnings.push('プロジェクトが1つも設定されていません。');
  }

  // 職歴が少ない場合
  const workExperiences = experiencesConfig.filter((e) => e.type === 'work');
  if (workExperiences.length === 0) {
    warnings.push('職歴が1つも設定されていません。');
  }

  return warnings;
}

/**
 * 設定の完全性チェック（開発時の確認用）
 */
export function validateConfig() {
  const errors = validateSiteConfig();
  const warnings = getConfigWarnings();

  if (errors.length > 0) {
    console.error('\n🚨 設定エラーが見つかりました:\n');
    errors.forEach((error, index) => {
      console.error(`  ${index + 1}. ${error}`);
    });
    console.error('\n');
    throw new ConfigValidationError(`${errors.length}個の設定エラーがあります。`);
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  設定の推奨事項:\n');
    warnings.forEach((warning, index) => {
      console.warn(`  ${index + 1}. ${warning}`);
    });
    console.warn('\n');
  }

  console.log('✅ 設定ファイルの検証が完了しました。\n');
}

// 開発環境でのみ実行
if (process.env.NODE_ENV === 'development') {
  try {
    validateConfig();
  } catch (error) {
    // 開発時はエラーを表示するが、ビルドは継続
    console.error(error);
  }
}

